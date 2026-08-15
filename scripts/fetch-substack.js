/*
 * Build-time Substack fetcher.
 *
 * The Substack feed is served as application/xml with no CORS header, so a
 * browser fetch from this static SPA is blocked. Instead we fetch and parse the
 * feed here, at build time (Node 18+ has global fetch), into a same-origin
 * static JSON that the SPA reads at runtime. No runtime backend, no CORS proxy.
 *
 * This section links OUT to Substack (the canonical channel); it never rehosts
 * full post bodies. We store only metadata plus a short summary. content:encoded
 * is used solely to count words for a reading estimate, then discarded.
 *
 * Resilience: if the fetch or parse fails and an existing JSON is present, we
 * keep it and exit 0 so a transient Substack blip never breaks a deploy. We only
 * error out when there is no existing JSON to fall back to.
 */
const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');

// SUBSTACK_FEED_URL can override the feed (useful for testing the resilience path).
const FEED_URL =
  process.env.SUBSTACK_FEED_URL || 'https://ryanfranklin3.substack.com/feed';
const SUBSTACK_URL = 'https://ryanfranklin3.substack.com/';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'substack-posts.json');
const CHANNEL_FALLBACK_DESCRIPTION =
  'Building modern data systems, one micro-project at a time.';
const SUMMARY_MAX = 200;
const WORDS_PER_MINUTE = 200;

const parser = new Parser({
  timeout: 20000,
  headers: { 'User-Agent': 'ms3dm.tech build (Substack feed reader)' },
  customFields: {
    // Register the namespaced fields we care about.
    item: [
      ['content:encoded', 'contentEncoded'],
      ['dc:creator', 'creator'],
    ],
  },
});

// Decode the handful of named/numeric HTML entities that show up in feed text.
const decodeEntities = (input) =>
  String(input)
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) =>
      String.fromCharCode(parseInt(code, 16)),
    );

const stripHtml = (html) =>
  decodeEntities(String(html).replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();

// Truncate to a word boundary near the limit, adding an ellipsis if cut.
const truncateSummary = (text) => {
  if (text.length <= SUMMARY_MAX) {
    return text;
  }
  const slice = text.slice(0, SUMMARY_MAX);
  const lastSpace = slice.lastIndexOf(' ');
  const trimmed = (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).replace(
    /[\s.,;:]+$/,
    '',
  );
  return `${trimmed}…`;
};

const countWords = (html) => {
  const text = stripHtml(html);
  if (!text) {
    return 0;
  }
  return text.split(/\s+/).length;
};

const toIso = (dateStr) => {
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
};

const toDisplayDate = (dateStr) => {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) {
    return '';
  }
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const buildPayload = (feed) => {
  const channelImage =
    (feed.image && feed.image.url) || (feed.itunes && feed.itunes.image) || '';

  const posts = (feed.items || [])
    .map((item) => {
      const summarySource = item.contentSnippet || item.content || item.description || '';
      const summary = truncateSummary(stripHtml(summarySource));
      const words = countWords(item.contentEncoded || '');
      const readingMins = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
      const image =
        (item.enclosure && item.enclosure.url) || channelImage || '';

      return {
        title: item.title || 'Untitled',
        url: item.link || SUBSTACK_URL,
        guid: item.guid || item.link || item.title || '',
        date: toIso(item.pubDate) || null,
        dateDisplay: toDisplayDate(item.pubDate),
        author: item.creator || (feed.title || '').trim() || '',
        summary,
        image,
        readingMins,
      };
    })
    // Newest first.
    .sort((a, b) => {
      const at = a.date ? Date.parse(a.date) : 0;
      const bt = b.date ? Date.parse(b.date) : 0;
      return bt - at;
    });

  return {
    channel: {
      title: (feed.title || 'Ryan Franklin').trim(),
      description: (feed.description || CHANNEL_FALLBACK_DESCRIPTION).trim(),
      url: feed.link || SUBSTACK_URL,
      image: channelImage,
    },
    fetchedAt: new Date().toISOString(),
    posts,
  };
};

const existingJsonExists = () => fs.existsSync(OUTPUT_PATH);

const keepExistingOrFail = (reason) => {
  if (existingJsonExists()) {
    console.warn(
      `[fetch-substack] ${reason}. Keeping existing public/substack-posts.json.`,
    );
    process.exit(0);
  }
  console.error(
    `[fetch-substack] ${reason}, and no existing public/substack-posts.json to fall back to.`,
  );
  process.exit(1);
};

const main = async () => {
  let feed;
  try {
    const res = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'ms3dm.tech build (Substack feed reader)' },
    });
    if (!res.ok) {
      keepExistingOrFail(`Feed fetch returned HTTP ${res.status}`);
      return;
    }
    const xml = await res.text();
    feed = await parser.parseString(xml);
  } catch (err) {
    keepExistingOrFail(`Feed fetch or parse failed (${err.message})`);
    return;
  }

  let payload;
  try {
    payload = buildPayload(feed);
  } catch (err) {
    keepExistingOrFail(`Feed transform failed (${err.message})`);
    return;
  }

  if (!payload.posts.length) {
    keepExistingOrFail('Feed returned zero posts');
    return;
  }

  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`);
  console.log(
    `[fetch-substack] Wrote ${payload.posts.length} posts to public/substack-posts.json`,
  );
};

main();

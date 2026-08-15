import { useEffect, useState } from 'react';

/*
 * Live architecture diagrams for the Homebase page.
 *
 * The Mermaid source is fetched at runtime from the Homebase repo so the page
 * always tracks upstream. Nothing diagram related is committed to this repo.
 * raw.githubusercontent.com serves permissive CORS, so a plain browser fetch
 * works without a proxy.
 */
export const DIAGRAMS_RAW_URL =
  'https://raw.githubusercontent.com/ryfranklin/Homebase/main/docs/diagrams.md';

export const DIAGRAMS_SOURCE_URL =
  'https://github.com/ryfranklin/Homebase/blob/main/docs/diagrams.md';

// Session cache key. Bump the suffix if the parse shape ever changes.
const CACHE_KEY = 'homebase-diagrams-md-v1';

/*
 * Parse the markdown into an ordered list of { title, code }. Each Mermaid
 * fenced block is paired with the nearest preceding level-2 ("## ") heading,
 * so the list is driven entirely by the file: new diagrams appear on their own.
 */
export const parseDiagrams = (markdown) => {
  const lines = String(markdown).split(/\r?\n/);
  const diagrams = [];

  let currentTitle = null;
  let inFence = false;
  let buffer = [];
  let titleForBlock = null;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (!inFence) {
      // Level-2 heading only (## Foo), not ### or deeper.
      const heading = line.match(/^##\s+(.*\S)\s*$/);
      if (heading) {
        currentTitle = heading[1].trim();
        continue;
      }
      if (/^```mermaid\s*$/.test(line.trim())) {
        inFence = true;
        buffer = [];
        titleForBlock = currentTitle;
        continue;
      }
      continue;
    }

    // Inside a mermaid fence: collect until the closing fence.
    if (/^```\s*$/.test(line.trim())) {
      inFence = false;
      const code = buffer.join('\n').trim();
      if (code) {
        diagrams.push({
          title: titleForBlock || `Diagram ${diagrams.length + 1}`,
          code,
        });
      }
      continue;
    }
    buffer.push(line);
  }

  return diagrams;
};

/*
 * Fetch the raw markdown, preferring a session cache so navigating away and
 * back does not refetch. Throws on a non-OK response so callers can fall back.
 */
export const fetchDiagramsMarkdown = async () => {
  try {
    const cached = window.sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      return cached;
    }
  } catch (e) {
    // sessionStorage can be unavailable (private mode, disabled). Fetch anyway.
  }

  const res = await fetch(DIAGRAMS_RAW_URL, { headers: { Accept: 'text/plain' } });
  if (!res.ok) {
    throw new Error(`Diagram fetch failed with status ${res.status}`);
  }
  const text = await res.text();

  try {
    window.sessionStorage.setItem(CACHE_KEY, text);
  } catch (e) {
    // Non-fatal: caching is a nicety, not a requirement.
  }
  return text;
};

/*
 * Hook: returns { status, diagrams, error } where status is one of
 * "loading", "ready", or "error". Never throws; the page stays up regardless.
 */
export const useDiagrams = () => {
  const [state, setState] = useState({
    status: 'loading',
    diagrams: [],
    error: null,
  });

  useEffect(() => {
    let active = true;

    fetchDiagramsMarkdown()
      .then((markdown) => {
        if (!active) {
          return;
        }
        const diagrams = parseDiagrams(markdown);
        if (!diagrams.length) {
          setState({
            status: 'error',
            diagrams: [],
            error: 'No diagrams found in the source file.',
          });
          return;
        }
        setState({ status: 'ready', diagrams, error: null });
      })
      .catch((err) => {
        if (active) {
          setState({ status: 'error', diagrams: [], error: err.message });
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return state;
};

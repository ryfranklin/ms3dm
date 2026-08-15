import { useEffect, useState } from 'react';

/*
 * Writing data.
 *
 * Posts come from a same-origin static JSON (public/substack-posts.json) that is
 * generated at build time from the Substack RSS feed. Reading it here is a plain
 * same-origin fetch: no CORS, no runtime backend. The section links out to
 * Substack (the canonical channel); full post bodies are never rehosted.
 */
export const SUBSTACK_URL = 'https://ryanfranklin3.substack.com/';

const JSON_PATH = `${process.env.PUBLIC_URL || ''}/substack-posts.json`;
const CACHE_KEY = 'substack-posts-v1';

const readCache = () => {
  try {
    const raw = window.sessionStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
};

const writeCache = (data) => {
  try {
    window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch (e) {
    // Caching is a nicety, not a requirement.
  }
};

/*
 * Hook: returns { status, channel, posts } where status is one of
 * "loading", "ready", or "empty". Never throws; the page stays up regardless.
 */
export const usePosts = () => {
  const [state, setState] = useState({
    status: 'loading',
    channel: null,
    posts: [],
  });

  useEffect(() => {
    let active = true;

    const apply = (data) => {
      if (!active) {
        return;
      }
      const posts = Array.isArray(data && data.posts) ? data.posts : [];
      if (!posts.length) {
        setState({ status: 'empty', channel: (data && data.channel) || null, posts: [] });
        return;
      }
      setState({ status: 'ready', channel: data.channel || null, posts });
    };

    const cached = readCache();
    if (cached) {
      apply(cached);
      return () => {
        active = false;
      };
    }

    fetch(JSON_PATH, { headers: { Accept: 'application/json' } })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        writeCache(data);
        apply(data);
      })
      .catch(() => {
        if (active) {
          setState({ status: 'empty', channel: null, posts: [] });
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return state;
};

/*
 * Temporary preview override so the hero ServiceNetwork can animate even when
 * the OS has Reduce Motion on. Not a visitor-facing setting.
 *
 *   /?motion=1  or  /?motion=preview   → force motion (also persisted)
 *   /?motion=0  or  /?motion=off       → clear the override
 *   localStorage ms3dm-motion-preview=1 → force motion across refreshes
 *
 * Default (no query, no localStorage) still fully respects prefers-reduced-motion.
 */

export const MOTION_PREVIEW_KEY = 'ms3dm-motion-preview';

const queryForcesOn = (q) => q === '1' || q === 'preview';
const queryForcesOff = (q) => q === '0' || q === 'off';

export const readMotionQuery = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    return new URLSearchParams(window.location.search).get('motion');
  } catch {
    return null;
  }
};

export const isMotionPreview = () => {
  if (typeof document !== 'undefined') {
    if (document.documentElement.getAttribute('data-motion-preview') === '1') {
      return true;
    }
  }
  const q = readMotionQuery();
  if (queryForcesOn(q)) {
    return true;
  }
  if (queryForcesOff(q)) {
    return false;
  }
  try {
    return window.localStorage.getItem(MOTION_PREVIEW_KEY) === '1';
  } catch {
    return false;
  }
};

export const applyMotionPreview = () => {
  if (typeof document === 'undefined') {
    return false;
  }

  const q = readMotionQuery();
  let on = false;

  if (queryForcesOn(q)) {
    on = true;
    try {
      window.localStorage.setItem(MOTION_PREVIEW_KEY, '1');
    } catch {
      /* ignore quota / private mode */
    }
  } else if (queryForcesOff(q)) {
    on = false;
    try {
      window.localStorage.removeItem(MOTION_PREVIEW_KEY);
    } catch {
      /* ignore */
    }
  } else {
    try {
      on = window.localStorage.getItem(MOTION_PREVIEW_KEY) === '1';
    } catch {
      on = false;
    }
  }

  if (on) {
    document.documentElement.setAttribute('data-motion-preview', '1');
  } else {
    document.documentElement.removeAttribute('data-motion-preview');
  }

  return on;
};

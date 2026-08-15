/**
 * Homebase design tokens, expressed as an MUI palette.
 *
 * The aesthetic is refined, near-black, monochrome-technical. There is NO brand
 * hue: the accent is white on near-black. Hairline translucent-white borders, a
 * whisper of cool atmospheric glow, generous negative space. The raw CSS custom
 * properties live in src/assets/homebase.css; the values below mirror them so
 * every MUI component inherits the same instrument look.
 */

// Shared Homebase primitives (kept in sync with :root in homebase.css).
const homebase = {
  bg: '#0a0a0a',
  bgSoft: '#0f0f10',
  surface: 'rgba(255,255,255,0.028)',
  surface2: 'rgba(255,255,255,0.055)',
  surface3: 'rgba(255,255,255,0.09)',
  border: 'rgba(255,255,255,0.09)',
  borderStrong: 'rgba(255,255,255,0.18)',
  text: '#f4f4f5',
  muted: '#9a9a9e',
  faint: '#6a6a6e',
  white: '#ffffff',
  danger: '#ff5f56',
  // One functional accent, used ONLY for pending / awaiting-action states.
  pending: '#e0a83a',
};

// The Homebase system is dark-first (color-scheme: dark). We expose the same
// near-black palette under both keys so any residual light-mode reference stays
// visually consistent rather than reverting to the old blue theme.
export const dark = {
  alternate: {
    main: homebase.bgSoft,
    dark: '#0c0c0d',
  },
  cardShadow: 'rgba(0, 0, 0, .5)',
  common: {
    black: '#000',
    white: homebase.white,
  },
  mode: 'dark',
  // "primary" is white-on-near-black. This drives CTAs, links, and accents.
  primary: {
    main: homebase.white,
    light: '#ffffff',
    dark: '#e6e6e8',
    contrastText: homebase.bg,
  },
  // "secondary" is the restrained pending accent, not a brand hue.
  secondary: {
    light: homebase.pending,
    main: homebase.pending,
    dark: '#c8912f',
    contrastText: homebase.bg,
  },
  error: {
    main: homebase.danger,
  },
  text: {
    primary: homebase.text,
    secondary: homebase.muted,
    disabled: homebase.faint,
  },
  divider: homebase.border,
  background: {
    paper: homebase.bgSoft,
    default: homebase.bg,
    level2: homebase.surface2,
    level1: homebase.surface,
  },
  homebase,
};

// Light kept as an alias of dark so the toggler never drops out of the
// monochrome instrument aesthetic.
export const light = { ...dark, mode: 'dark' };

/**
 * Design tokens, expressed as an MUI palette.
 *
 * Dark, high-contrast, aerospace-adjacent: deep blacks, crisp off-white type,
 * and one restrained electric-blue accent. Hairline borders, a faint technical
 * grid, and generous negative space. The raw CSS custom properties live in
 * src/assets/homebase.css; the values below mirror them so every MUI component
 * inherits the same look.
 */

// Shared primitives (kept in sync with :root in homebase.css).
const homebase = {
  bg: '#050507',
  bgSoft: '#0a0b0f',
  surface: 'rgba(255,255,255,0.03)',
  surface2: 'rgba(255,255,255,0.055)',
  surface3: 'rgba(255,255,255,0.09)',
  border: 'rgba(255,255,255,0.10)',
  borderStrong: 'rgba(255,255,255,0.22)',
  text: '#F4F6FA',
  muted: '#9AA3B2',
  faint: '#6B7380',
  white: '#ffffff',
  danger: '#ff5f56',
  // Functional amber — pending / awaiting-action only.
  pending: '#e0a83a',
  // SpaceXAI-adjacent electric blue. Used sparingly: kickers, hover, focus.
  accent: '#4DA3FF',
  accentSoft: 'rgba(77, 163, 255, 0.12)',
  accentStrong: 'rgba(77, 163, 255, 0.40)',
};

// Dark-first. Both keys resolve to the same near-black palette so residual
// light-mode references stay visually consistent.
export const dark = {
  alternate: {
    main: homebase.bgSoft,
    dark: '#07080b',
  },
  cardShadow: 'rgba(0, 0, 0, .55)',
  common: {
    black: '#000',
    white: homebase.white,
  },
  mode: 'dark',
  // Primary stays white-on-black so CTAs read like a product console, not a
  // generic blue SaaS template.
  primary: {
    main: homebase.white,
    light: '#ffffff',
    dark: '#e6e8ee',
    contrastText: homebase.bg,
  },
  // Secondary is the restrained electric-blue accent.
  secondary: {
    light: '#7CBCFF',
    main: homebase.accent,
    dark: '#2B7FD6',
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

export const light = { ...dark, mode: 'dark' };

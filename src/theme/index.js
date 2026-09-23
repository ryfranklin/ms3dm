import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

// Geist / Geist Mono are loaded in public/index.html.
const FONT_SANS =
  '"Geist Variable", "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const FONT_MONO =
  '"Geist Mono Variable", "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const ACCENT = '#4DA3FF';
const BG = '#050507';
const BG_SOFT = '#0a0b0f';
const TEXT = '#F4F6FA';

const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: FONT_SANS,
        fontMono: FONT_MONO,
        fontSize: 15,
        body1: { fontSize: '0.9375rem', lineHeight: 1.65 },
        body2: { lineHeight: 1.65 },
        h1: { fontWeight: 600, letterSpacing: '-0.028em', lineHeight: 1.04 },
        h2: { fontWeight: 600, letterSpacing: '-0.024em', lineHeight: 1.06 },
        h3: { fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.12 },
        h4: { fontWeight: 600, letterSpacing: '-0.018em', lineHeight: 1.18 },
        h5: { fontWeight: 600, letterSpacing: '-0.012em', lineHeight: 1.28 },
        h6: { fontWeight: 600, letterSpacing: '-0.01em' },
        button: {
          textTransform: 'none',
          fontWeight: 500,
          letterSpacing: 0,
        },
        overline: {
          fontFamily: FONT_MONO,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          fontSize: '0.72rem',
          fontWeight: 500,
        },
      },
      shape: {
        borderRadius: 6,
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundColor: BG,
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            },
          },
        },
        MuiButton: {
          defaultProps: {
            disableElevation: true,
          },
          styleOverrides: {
            root: {
              fontWeight: 500,
              borderRadius: 4,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              transition: `transform 0.22s ${EASE}, background-color 0.22s ${EASE}, border-color 0.22s ${EASE}, box-shadow 0.22s ${EASE}, color 0.22s ${EASE}`,
            },
            // Primary CTA: solid white on near-black. Lift only — no scale.
            containedPrimary: {
              backgroundColor: '#ffffff',
              color: BG,
              border: 'none',
              '&:hover': {
                backgroundColor: '#ffffff',
                transform: 'translateY(-1px)',
                boxShadow: `0 0 0 1px ${ACCENT}66, 0 12px 28px rgba(0,0,0,0.45)`,
              },
            },
            outlined: {
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderColor: 'rgba(255,255,255,0.18)',
              color: TEXT,
              '&:hover': {
                backgroundColor: 'rgba(77,163,255,0.08)',
                borderColor: ACCENT,
                color: TEXT,
                transform: 'translateY(-1px)',
              },
            },
            text: {
              color: TEXT,
              '&:hover': {
                backgroundColor: 'rgba(77,163,255,0.08)',
                color: ACCENT,
              },
            },
          },
        },
        MuiAppBar: {
          defaultProps: {
            elevation: 0,
          },
          styleOverrides: {
            root: {
              backgroundImage: 'none',
              backgroundColor: 'rgba(5,5,7,0.72)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              boxShadow: 'none',
              borderRadius: 0,
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundImage: 'none',
            },
            outlined: {
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 8,
            },
          },
        },
        MuiMenu: {
          styleOverrides: {
            paper: {
              backgroundColor: BG_SOFT,
              backgroundImage: 'none',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 6,
            },
          },
        },
        MuiPopover: {
          styleOverrides: {
            paper: {
              backgroundColor: BG_SOFT,
              backgroundImage: 'none',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 6,
            },
          },
        },
        MuiDialog: {
          styleOverrides: {
            paper: {
              backgroundColor: BG_SOFT,
              backgroundImage: 'none',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 8,
            },
          },
        },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: BG_SOFT,
              backgroundImage: 'none',
              borderRight: '1px solid rgba(255,255,255,0.10)',
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              color: TEXT,
              textUnderlineOffset: '2px',
              textDecorationColor: 'rgba(255,255,255,0.18)',
              transition: `color 0.2s ${EASE}, text-decoration-color 0.2s ${EASE}`,
              '&:hover': {
                color: ACCENT,
                textDecorationColor: ACCENT,
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: 'none',
              backgroundImage: 'none',
              transition: `border-color 0.28s ${EASE}, background-color 0.28s ${EASE}, transform 0.28s ${EASE}, box-shadow 0.28s ${EASE}`,
              '&:hover': {
                borderColor: 'rgba(77,163,255,0.42)',
                backgroundColor: 'rgba(255,255,255,0.045)',
                transform: 'translateY(-2px)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
              },
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: 4,
              fontFamily: FONT_MONO,
              fontSize: '0.75rem',
              letterSpacing: '0.02em',
              border: '1px solid rgba(255,255,255,0.10)',
              backgroundColor: 'rgba(255,255,255,0.04)',
              color: TEXT,
            },
            outlined: {
              borderColor: 'rgba(255,255,255,0.10)',
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 6,
              backgroundColor: 'rgba(255,255,255,0.03)',
              color: TEXT,
              fontSize: '16px',
            },
            input: {
              color: TEXT,
              '&::placeholder': {
                color: '#6B7380',
                opacity: 1,
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 6,
              backgroundColor: 'rgba(255,255,255,0.03)',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.10)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.22)',
              },
              '&.Mui-focused': {
                boxShadow: `0 0 0 3px rgba(77,163,255,0.16)`,
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: ACCENT,
                borderWidth: 1,
              },
            },
            input: {
              borderRadius: 6,
            },
          },
        },
      },
      homebase: {
        ease: EASE,
        fontMono: FONT_MONO,
      },
      themeToggler,
    }),
  );

export default getTheme;

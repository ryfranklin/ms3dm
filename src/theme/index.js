import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

// Homebase font stacks. Geist / Geist Mono are loaded in public/index.html.
const FONT_SANS =
  '"Geist Variable", "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const FONT_MONO =
  '"Geist Mono Variable", "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      // Homebase is dark-first; both keys resolve to the same near-black palette.
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: FONT_SANS,
        fontMono: FONT_MONO,
        // Body 15px, generous line-height, tighter heading tracking.
        fontSize: 15,
        body1: { fontSize: '0.9375rem', lineHeight: 1.6 },
        body2: { lineHeight: 1.6 },
        h1: { fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05 },
        h2: { fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.08 },
        h3: { fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.12 },
        h4: { fontWeight: 500, letterSpacing: '-0.015em', lineHeight: 1.2 },
        h5: { fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.3 },
        h6: { fontWeight: 500, letterSpacing: '-0.01em' },
        button: {
          textTransform: 'none',
          fontWeight: 500,
          letterSpacing: 0,
        },
        // Convenience token for mono labels/kickers/captions.
        overline: {
          fontFamily: FONT_MONO,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontSize: '0.72rem',
          fontWeight: 500,
        },
      },
      shape: {
        borderRadius: 12,
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundColor: '#0a0a0a',
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
              borderRadius: 999,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              transition: `transform 0.25s ${EASE}, background-color 0.25s ${EASE}, border-color 0.25s ${EASE}`,
            },
            // Primary CTA: solid white on near-black, lifts on hover.
            containedPrimary: {
              backgroundColor: '#ffffff',
              color: '#0a0a0a',
              border: 'none',
              '&:hover': {
                backgroundColor: '#ffffff',
                transform: 'translateY(-1px) scale(1.04)',
              },
            },
            // Secondary: hairline surface, subtle lift.
            outlined: {
              backgroundColor: 'rgba(255,255,255,0.055)',
              borderColor: 'rgba(255,255,255,0.18)',
              color: '#f4f4f5',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.09)',
                borderColor: 'rgba(255,255,255,0.18)',
                transform: 'translateY(-1px)',
              },
            },
            text: {
              color: '#f4f4f5',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.055)',
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
              // Sticky header: translucent near-black with a blur and a single
              // hairline base border. No Material shadow.
              backgroundColor: 'rgba(10,10,10,0.6)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              borderBottom: '1px solid rgba(255,255,255,0.09)',
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
            // An explicitly bordered surface: hairline on near-black, radius 18.
            outlined: {
              backgroundColor: 'rgba(255,255,255,0.028)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 18,
            },
          },
        },
        // Overlay surfaces (menus, popovers, dialogs, drawers): bg-soft with a
        // hairline border. Depth comes from the near-flat shadow ramp.
        MuiMenu: {
          styleOverrides: {
            paper: {
              backgroundColor: '#0f0f10',
              backgroundImage: 'none',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 12,
            },
          },
        },
        MuiPopover: {
          styleOverrides: {
            paper: {
              backgroundColor: '#0f0f10',
              backgroundImage: 'none',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 12,
            },
          },
        },
        MuiDialog: {
          styleOverrides: {
            paper: {
              backgroundColor: '#0f0f10',
              backgroundImage: 'none',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 18,
            },
          },
        },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: '#0f0f10',
              backgroundImage: 'none',
              borderRight: '1px solid rgba(255,255,255,0.09)',
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              color: '#f4f4f5',
              textUnderlineOffset: '2px',
              textDecorationColor: 'rgba(255,255,255,0.18)',
              transition: `color 0.2s ${EASE}, text-decoration-color 0.2s ${EASE}`,
              '&:hover': {
                textDecorationColor: '#f4f4f5',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 18,
              backgroundColor: 'rgba(255,255,255,0.028)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: 'none',
              backgroundImage: 'none',
              transition: `border-color 0.3s ${EASE}, background-color 0.3s ${EASE}, transform 0.3s ${EASE}`,
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.18)',
                backgroundColor: 'rgba(255,255,255,0.055)',
              },
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: 999,
              fontFamily: FONT_MONO,
              fontSize: '0.75rem',
              letterSpacing: '0.02em',
              border: '1px solid rgba(255,255,255,0.09)',
              backgroundColor: 'rgba(255,255,255,0.055)',
              color: '#f4f4f5',
            },
            outlined: {
              borderColor: 'rgba(255,255,255,0.09)',
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              backgroundColor: 'rgba(255,255,255,0.028)',
              color: '#f4f4f5',
              // 16px input font to avoid iOS zoom.
              fontSize: '16px',
            },
            input: {
              color: '#f4f4f5',
              '&::placeholder': {
                color: '#6a6a6e',
                opacity: 1,
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              backgroundColor: 'rgba(255,255,255,0.028)',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.09)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.18)',
              },
              '&.Mui-focused': {
                boxShadow: '0 0 0 4px rgba(255,255,255,0.04)',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.18)',
                borderWidth: 1,
              },
            },
            input: {
              borderRadius: 12,
            },
          },
        },
      },
      // Expose the ease + mono stack for component-level use.
      homebase: {
        ease: EASE,
        fontMono: FONT_MONO,
      },
      themeToggler,
    }),
  );

export default getTheme;

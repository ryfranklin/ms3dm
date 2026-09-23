import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { CALENDLY_URL, CALENDLY_LABEL } from 'config/calendly';

/*
 * Commercial close. Offers are the default next step; Calendly is the
 * discovery path. Mailto stays in the footer.
 */
const CallToAction = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ paddingY: { xs: 8, md: 12 } }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          backgroundColor: 'var(--surface)',
          paddingX: { xs: 3, md: 8 },
          paddingY: { xs: 6, md: 9 },
          textAlign: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, var(--accent), transparent)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(70% 80% at 50% 0%, rgba(77,163,255,0.10), transparent 70%)',
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'secondary.main' }}
            gutterBottom
          >
            Next step
          </Typography>
          <Typography
            variant="h3"
            color="text.primary"
            sx={{
              fontWeight: 600,
              marginBottom: 2,
              fontSize: { xs: '2rem', md: '2.75rem' },
            }}
          >
            Pick one workflow. Ship it.
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.7 }}
          >
            Capacity is about 10 to 15 hours a week, so the next slot is limited.
            Start with an AI Ops Sprint or Internal Docs Q&amp;A, then a Monthly
            Builder Retainer if you want it kept in production. Prefer a short
            call first? Book a 30-minute discovery.
          </Typography>

          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Button
              component="a"
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href="#offers"
            >
              See the offers
            </Button>
            <Button
              component="a"
              variant="outlined"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CALENDLY_LABEL}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CallToAction;

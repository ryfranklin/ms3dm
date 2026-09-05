import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { CALENDLY_URL, CALENDLY_LABEL } from 'config/calendly';

/*
 * Commercial close. Assessment is the default next step; Calendly is the
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
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          backgroundColor: 'var(--surface)',
          paddingX: { xs: 3, md: 8 },
          paddingY: { xs: 6, md: 9 },
          textAlign: 'center',
        }}
      >
        <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
          Next step
        </Typography>
        <Typography
          variant="h3"
          color="text.primary"
          sx={{ fontWeight: 600, marginBottom: 2, fontSize: { xs: '2rem', md: '2.75rem' } }}
        >
          Start with a readiness assessment.
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.7 }}
        >
          Most engagements begin with a 2 to 4 week AI &amp; Data Readiness
          Assessment ($15k to $25k fixed): inventory, quality and governance
          gaps, feature readiness, and an executive roadmap. Prefer a short
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
            href="/contact-page#assessment"
          >
            Start with a readiness assessment
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
  );
};

export default CallToAction;

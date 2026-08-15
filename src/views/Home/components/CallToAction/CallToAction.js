import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

/*
 * Contact CTA. One clear next step: email the practice directly.
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
          Contact
        </Typography>
        <Typography
          variant="h3"
          color="text.primary"
          sx={{ fontWeight: 600, marginBottom: 2, fontSize: { xs: '2rem', md: '2.75rem' } }}
        >
          Have a data platform or an agent to build?
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.7 }}
        >
          Tell me what you are working on: a lakehouse to modernize, a pipeline to
          make reliable, or an agentic system that has to stay inside its
          guardrails. I read every message.
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
            href="mailto:ryan.franklin@ms3dm.tech"
          >
            ryan.franklin@ms3dm.tech
          </Button>
          <Button
            component="a"
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href="/contact-page"
          >
            Contact form
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CallToAction;

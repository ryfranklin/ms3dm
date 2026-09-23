/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ServiceNetwork from 'components/ServiceNetwork';
import { CALENDLY_URL, CALENDLY_LABEL } from 'config/calendly';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box paddingY={{ xs: 6, md: 10 }}>
      <Box
        className="hb-rise"
        sx={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}
      >
        <Typography
          variant="overline"
          component="p"
          sx={{ color: 'secondary.main', marginBottom: 2 }}
        >
          Fixed-scope AI delivery / Production on AWS / Limited availability
        </Typography>
        <Box
          sx={{
            width: 40,
            height: 1,
            backgroundColor: 'var(--accent)',
            margin: '0 auto',
            marginBottom: 3,
            opacity: 0.85,
          }}
        />

        <Typography
          variant="h2"
          component="h1"
          color="text.primary"
          sx={{
            fontWeight: 600,
            marginBottom: 3,
            fontSize: { xs: '2.4rem', md: '3.4rem' },
          }}
        >
          Production data platforms and agentic AI systems, built on AWS.
        </Typography>

        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{
            fontWeight: 400,
            maxWidth: 680,
            margin: '0 auto',
            lineHeight: 1.65,
          }}
        >
          Most teams have AI ideas and no shipping path. I take one painful
          workflow and put it in production in 2 to 3 weeks, then can maintain
          it on a small retainer. The work is production data and agent systems
          on AWS, with evals and a human go/no-go, not slide-deck strategy
          consulting. Capacity is about 10 to 15 hours a week.
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="center"
          gap={2}
          marginTop={4}
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

      <Box
        marginTop={{ xs: 5, md: 7 }}
        sx={{
          position: 'relative',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          backgroundColor: 'var(--surface)',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(55% 70% at 50% 45%, rgba(77,163,255,0.08), transparent 72%)',
          },
        }}
      >
        <ServiceNetwork height={isMd ? 380 : 300} />
      </Box>
    </Box>
  );
};

export default Hero;

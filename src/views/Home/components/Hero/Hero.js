/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ServiceNetwork from 'components/ServiceNetwork';

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
          sx={{ color: 'text.secondary', marginBottom: 3 }}
        >
          Data platforms / Agentic AI / AWS
        </Typography>

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
          ms3dm.tech is an independent practice. I design medallion lakehouse
          architectures on S3 and Apache Iceberg, and ship guardrailed, agentic
          AI: plan-and-execute agents grounded in retrieval, checked on every
          call.
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
            href="/contact-page"
          >
            Start a conversation
          </Button>
          <Button
            component="a"
            variant="text"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href="#selected-work"
          >
            See selected work
          </Button>
        </Box>
      </Box>

      {/* The service-network node graph is the visual identity. */}
      <Box marginTop={{ xs: 4, md: 6 }}>
        <ServiceNetwork height={isMd ? 380 : 300} />
      </Box>
    </Box>
  );
};

export default Hero;

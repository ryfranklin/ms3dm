import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ServiceNetwork from 'components/ServiceNetwork';

const GITHUB_URL = 'https://github.com/ryfranklin/Homebase';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box paddingTop={{ xs: 6, md: 10 }} paddingBottom={{ xs: 2, md: 4 }}>
      <Box className="hb-rise" sx={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <Typography variant="overline" component="p" sx={{ color: 'text.secondary', marginBottom: 3 }}>
          Flagship project / AWS + Anthropic-native
        </Typography>

        <Typography
          variant="h2"
          component="h1"
          color="text.primary"
          sx={{ fontWeight: 600, marginBottom: 3, fontSize: { xs: '2.3rem', md: '3.3rem' } }}
        >
          Homebase: a production personal AI platform.
        </Typography>

        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400, maxWidth: 700, margin: '0 auto', lineHeight: 1.65 }}
        >
          Homebase is a personal AI pipeline: an authenticated web GUI plus an SSH
          plane over a private knowledge base, running on AWS and Anthropic-native.
          It is the single-tenant seed of a multi-tenant platform, and every
          environment-specific value is an input (a Terraform variable, a runtime
          env var, a Secrets Manager secret, or an SSM SecureString), never a
          literal in code.
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
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Button>
          <Button
            component="a"
            variant="text"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href="#architecture"
          >
            See the architecture
          </Button>
        </Box>
      </Box>

      <Box marginTop={{ xs: 4, md: 6 }}>
        <ServiceNetwork height={isMd ? 320 : 260} />
      </Box>
    </Box>
  );
};

export default Hero;

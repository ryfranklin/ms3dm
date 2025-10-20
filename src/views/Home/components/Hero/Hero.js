/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from 'components/Logo';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={6} textAlign="center">
        <Box marginBottom={4}>
          <Logo size="xlarge" />
        </Box>
      </Box>
      <Box marginBottom={4}>
        <Box marginBottom={3}>
          <Typography
            variant="h2"
            color="text.primary"
            align={'center'}
            sx={{
              fontWeight: 700,
              marginBottom: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Transform Data into Smarter Decisions
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{ 
              fontWeight: 400,
              maxWidth: 900,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
            align={'center'}
          >
            ms3dm.tech empowers enterprises with data-driven decision making — turning complex business data into actionable insights that accelerate growth and operational excellence.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'center' }}
          justifyContent={'center'}
          gap={2}
        >
          <Button
            component={'a'}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href={'/contact-page'}
            sx={{
              paddingX: 4,
              paddingY: 1.5,
              fontSize: '1.1rem',
            }}
          >
            See How It Works
          </Button>
          <Button
            component={'a'}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href={'/contact-page'}
            sx={{
              paddingX: 4,
              paddingY: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Schedule a Demo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;

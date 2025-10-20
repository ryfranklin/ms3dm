import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const CallToAction = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        backgroundColor: alpha(theme.palette.primary.main, 0.05),
        paddingY: 10,
        textAlign: 'center',
      }}
    >
      <Box marginBottom={4}>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
            marginBottom: 2,
          }}
        >
          Ready to Become a Data-Driven Organization?
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          sx={{ fontWeight: 400, maxWidth: 700, margin: '0 auto' }}
        >
          Let&apos;s talk about your data challenges and how we can help you transform complex business data into actionable insights that drive growth.
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
          Book a Consultation
        </Button>
        <Button
          component={'a'}
          variant="outlined"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          href={'/about'}
          sx={{
            paddingX: 4,
            paddingY: 1.5,
            fontSize: '1.1rem',
          }}
        >
          Explore Case Studies
        </Button>
      </Box>
      <Box marginTop={6}>
        <Typography
          variant="body2"
          color="text.secondary"
          align={'center'}
          sx={{ fontStyle: 'italic' }}
        >
          Trusted by enterprises across retail, finance, healthcare, and manufacturing
        </Typography>
      </Box>
    </Box>
  );
};

export default CallToAction;


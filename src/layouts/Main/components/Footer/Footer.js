import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Logo from 'components/Logo';

const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: '1px solid var(--border)',
        paddingTop: 4,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Box>
        <Logo size="small" />
        <Typography
          sx={{
            marginTop: 1.5,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.04em',
            color: 'text.disabled',
          }}
        >
          Data platforms and agentic AI on AWS.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: { xs: 1, sm: 3 },
        }}
      >
        <Link
          href="mailto:ryan.franklin@ms3dm.tech"
          underline="none"
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'text.secondary',
            '&:hover': { color: 'text.primary' },
          }}
        >
          ryan.franklin@ms3dm.tech
        </Link>
        <Typography
          variant="caption"
          sx={{ fontFamily: 'var(--font-mono)', color: 'text.disabled' }}
        >
          &copy; ms3dm.tech 2026
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

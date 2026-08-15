import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/*
 * Homebase wordmark: mono text "ms3dm.tech" plus a small pulsing white dot.
 * Monochrome and near-black by design, so it sits on the instrument palette
 * without a brand hue. The dot uses the hb-pulse-dot keyframe (homebase.css),
 * which the global reduced-motion rule stills automatically.
 */

const Logo = ({ size = 'medium' }) => {
  const sizes = {
    small: { font: '0.95rem', dot: 6 },
    medium: { font: '1.15rem', dot: 7 },
    large: { font: '1.6rem', dot: 9 },
    xlarge: { font: '2.2rem', dot: 12 },
  };

  const { font, dot } = sizes[size] || sizes.medium;

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        transition: 'opacity 0.3s var(--ease)',
        '&:hover': { opacity: 0.8 },
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: font,
          fontWeight: 500,
          letterSpacing: '-0.01em',
          color: 'var(--text)',
          lineHeight: 1,
        }}
      >
        ms3dm.tech
      </Typography>
      <Box
        component="span"
        sx={{
          width: dot,
          height: dot,
          marginLeft: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--white)',
          boxShadow: '0 0 0 3px rgba(255,255,255,0.08)',
          animation: 'hb-pulse-dot 3s var(--ease) infinite',
        }}
      />
    </Box>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  // Retained for API compatibility with existing callers.
  variant: PropTypes.string,
  colorInvert: PropTypes.bool,
};

export default Logo;

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ms3dmTransparent from 'assets/img/ms3dm_transparent.png';
import ms3dmLogo from 'assets/img/ms3dmlogo.png';

const Logo = ({ size = 'medium', variant = 'full' }) => {
  const sizes = {
    small: { height: 40 },
    medium: { height: 60 },
    large: { height: 80 },
    xlarge: { height: 120 },
  };
  
  const { height } = sizes[size] || sizes.medium;
  
  // Use the transparent logo for most cases, and the full logo for icon variant
  const logoSrc = variant === 'icon' ? ms3dmLogo : ms3dmTransparent;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        '&:hover': {
          opacity: 0.8,
          transition: 'opacity 0.3s ease',
        },
      }}
    >
      <img
        src={logoSrc}
        alt="ms3dm.tech"
        style={{
          height: `${height}px`,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  variant: PropTypes.oneOf(['full', 'icon']),
};

export default Logo;

import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Logo = ({ size = 'medium', variant = 'full', colorInvert = false }) => {
  const theme = useTheme();
  
  const sizes = {
    small: { iconSize: 24, fontSize: '1rem' },
    medium: { iconSize: 32, fontSize: '1.25rem' },
    large: { iconSize: 48, fontSize: '1.75rem' },
    xlarge: { iconSize: 64, fontSize: '2.25rem' },
  };
  
  const { iconSize, fontSize } = sizes[size] || sizes.medium;

  const LogoIcon = () => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Line graph */}
      <path
        d="M8 32 L16 24 L24 28 L32 20 L40 16 L48 12"
        stroke={colorInvert ? theme.palette.common.white : theme.palette.primary.main}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Data points */}
      <circle cx="16" cy="24" r="3" fill={colorInvert ? theme.palette.common.white : theme.palette.primary.main} />
      <circle cx="24" cy="28" r="3" fill={colorInvert ? theme.palette.common.white : theme.palette.primary.main} />
      {/* Stacked cylinders */}
      <ellipse cx="44" cy="20" rx="6" ry="2" fill="none" stroke={colorInvert ? theme.palette.common.white : theme.palette.primary.main} strokeWidth="2" />
      <ellipse cx="42" cy="24" rx="6" ry="2" fill="none" stroke={colorInvert ? theme.palette.common.white : theme.palette.primary.main} strokeWidth="2" />
      <ellipse cx="40" cy="28" rx="6" ry="2" fill="none" stroke={colorInvert ? theme.palette.common.white : theme.palette.primary.main} strokeWidth="2" />
    </svg>
  );

  if (variant === 'icon') {
    return <LogoIcon />;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        '&:hover': {
          opacity: 0.8,
          transition: 'opacity 0.3s ease',
        },
      }}
    >
      <Box marginRight={1.5}>
        <LogoIcon />
      </Box>
      <Box>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
            fontSize: fontSize,
            color: colorInvert ? theme.palette.common.white : theme.palette.text.primary,
            lineHeight: 1,
          }}
        >
          ms3dm
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{
            fontWeight: 500,
            fontSize: `calc(${fontSize} * 0.7)`,
            color: colorInvert ? theme.palette.common.white : theme.palette.text.secondary,
            lineHeight: 1,
            marginTop: 0.25,
          }}
        >
          tech
        </Typography>
      </Box>
    </Box>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  variant: PropTypes.oneOf(['full', 'icon']),
  colorInvert: PropTypes.bool,
};

export default Logo;

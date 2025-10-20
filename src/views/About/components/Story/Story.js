/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { DataArchitectureInsights } from 'components/DataVisualizations';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 4,
        padding: 6,
        marginBottom: 4,
      }}
    >
      <Grid container spacing={6} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'flex-start'} xs={12} md={6}>
          <Box>
            <Typography 
              variant={'h3'} 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                color: 'white',
                marginBottom: 3,
              }}
            >
              Our Story
            </Typography>
            <Typography 
              component={'p'}
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: 2,
              }}
            >
              At our company, we are dedicated to data architecture and engineering. We are passionate about working with top professionals in the field.
            </Typography>
            <Typography 
              component={'p'}
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              Our team of expert consultants helps bridge the gap between companies and their clients by developing cutting-edge software solutions that not only serve as powerful tools but also provide practical solutions to online business challenges. We also offer digital marketing strategies that connect you with your ideal clients and foster customer loyalty.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box width={1}>
            <DataArchitectureInsights size={500} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;

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
              Founded on the belief that every organization deserves access to world-class data capabilities, ms3dm.tech emerged from a simple observation: most companies have data, but few truly leverage it for competitive advantage.
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
              Our team of expert data engineers, analytics specialists, and business intelligence consultants brings together decades of experience transforming complex data challenges into strategic opportunities. We&apos;ve helped organizations across retail, finance, healthcare, and manufacturing unlock the power of their data to drive measurable business outcomes.
            </Typography>
            <Typography 
              component={'p'}
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              What sets us apart is our commitment to practical, results-driven solutions. We don&apos;t just implement technology—we partner with you to build data capabilities that evolve with your business, ensuring you stay ahead in an increasingly data-driven world.
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

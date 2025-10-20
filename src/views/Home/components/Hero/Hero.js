/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Logo from 'components/Logo';
import { DataIntegrationChart, AnalyticsDashboard, PointCloud3D } from 'components/DataVisualizations';

const solutions = [
  {
    title: '3D Data Integration',
    subtitle:
      'Unify scans, models, and metadata across systems to create a single source of truth for your 3D data.',
    icon: <DataIntegrationChart size={80} />,
  },
  {
    title: 'Automation & AI Tools',
    subtitle:
      'Streamline manual 3D workflows with intelligent automation and AI-powered processing capabilities.',
    icon: <PointCloud3D size={80} />,
  },
  {
    title: 'Analytics & Insights',
    subtitle:
      'Turn 3D data into enterprise intelligence with advanced analytics and actionable business insights.',
    icon: <AnalyticsDashboard size={80} />,
  },
];

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
        <Box marginBottom={2}>
          <Typography
            variant="h3"
            color="text.primary"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            Transform 3D Data into Smarter Decisions.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            ms3dm.tech connects scans, models, and data systems — turning complex 3D information into actionable insights for enterprise workflows.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'center' }}
          justifyContent={'center'}
        >
          <Button
            component={'a'}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href={'/contact-page'}
          >
            See How It Works
          </Button>
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            width={{ xs: '100%', md: 'auto' }}
          >
            <Button
              component={'a'}
              variant="outlined"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href={'/contact-page'}
            >
              Schedule a Demo
            </Button>
          </Box>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {solutions.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={1} data-aos={'fade-up'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Hero;

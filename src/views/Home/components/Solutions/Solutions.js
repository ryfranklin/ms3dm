import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { DataIntegrationChart, AnalyticsDashboard, PointCloud3D } from 'components/DataVisualizations';

const solutions = [
  {
    title: 'Data Integration & Governance',
    subtitle:
      'Unify data sources across your enterprise to create a single source of truth. Connect disparate systems, ensure data quality, and eliminate silos for better decision-making.',
    icon: <DataIntegrationChart size={80} />,
    benefits: [
      'Enterprise data unification',
      'Data quality & governance',
      'Real-time synchronization',
    ],
  },
  {
    title: 'Advanced Analytics & AI',
    subtitle:
      'Leverage cutting-edge analytics and AI to uncover hidden patterns, predict outcomes, and automate insights. Transform raw data into strategic advantages.',
    icon: <PointCloud3D size={80} />,
    benefits: [
      'Predictive modeling & forecasting',
      'Machine learning automation',
      'Pattern recognition & anomaly detection',
    ],
  },
  {
    title: 'Business Intelligence & Visualization',
    subtitle:
      'Turn complex data into clear, actionable insights with intuitive dashboards and custom reporting. Empower every stakeholder with the information they need.',
    icon: <AnalyticsDashboard size={80} />,
    benefits: [
      'Interactive dashboards',
      'Custom KPI tracking',
      'Self-service analytics',
    ],
  },
];

const Solutions = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingY: 8,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box marginBottom={6}>
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
            marginBottom: 2,
          }}
        >
          Our Solutions
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          sx={{ fontWeight: 400, maxWidth: 800, margin: '0 auto' }}
        >
          Comprehensive data solutions that transform how enterprises make decisions
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {solutions.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card
              sx={{
                height: '100%',
                backgroundColor: theme.palette.background.paper,
                boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.08)}`,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.12)}`,
                },
              }}
              data-aos={'fade-up'}
              data-aos-delay={i * 200}
            >
              <CardContent sx={{ padding: 3 }}>
                <Box
                  component={Avatar}
                  width={80}
                  height={80}
                  marginBottom={3}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                  sx={{ margin: '0 auto 24px auto' }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h5'}
                  gutterBottom
                  sx={{ fontWeight: 600, marginBottom: 2 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography 
                  align={'center'} 
                  color="text.secondary"
                  sx={{ marginBottom: 3, lineHeight: 1.6 }}
                >
                  {item.subtitle}
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  {item.benefits.map((benefit, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.primary.main,
                          marginRight: 1.5,
                        }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {benefit}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ marginTop: 3, textAlign: 'center' }}>
                  <Button
                    variant="text"
                    color="primary"
                    href="/contact-page"
                    sx={{ fontWeight: 600 }}
                  >
                    Learn More →
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;


import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const caseStudies = [
  {
    client: 'Industrial Engineering Firm',
    challenge: 'Slow model generation from lidar scans',
    solution: 'Automated point cloud processing + integration with ERP',
    outcome: '30% faster turnaround and unified data access',
    metric: '30%',
    metricLabel: 'Faster Turnaround',
  },
  {
    client: 'Manufacturing Company',
    challenge: 'Disconnected 3D data across multiple systems',
    solution: 'Unified 3D data platform with real-time synchronization',
    outcome: 'Eliminated data silos and improved decision-making speed',
    metric: '50%',
    metricLabel: 'Faster Decisions',
  },
  {
    client: 'Construction Firm',
    challenge: 'Manual 3D model quality checks',
    solution: 'AI-powered automated quality assessment',
    outcome: 'Reduced manual review time and improved accuracy',
    metric: '75%',
    metricLabel: 'Time Saved',
  },
];

const CaseStudies = () => {
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
          Real-World Impact
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          sx={{ fontWeight: 400 }}
        >
          See how enterprises are transforming their 3D data workflows
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {caseStudies.map((study, i) => (
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
                <Box marginBottom={3}>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{
                      fontWeight: 600,
                      marginBottom: 2,
                    }}
                  >
                    {study.client}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      marginBottom: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      color="primary"
                      sx={{ fontWeight: 700 }}
                    >
                      {study.metric}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ fontWeight: 500 }}
                  >
                    {study.metricLabel}
                  </Typography>
                </Box>
                
                <Box marginBottom={2}>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontWeight: 600, marginBottom: 1 }}
                  >
                    Challenge:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" marginBottom={2}>
                    {study.challenge}
                  </Typography>
                  
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontWeight: 600, marginBottom: 1 }}
                  >
                    Solution:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" marginBottom={2}>
                    {study.solution}
                  </Typography>
                  
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontWeight: 600, marginBottom: 1 }}
                  >
                    Outcome:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {study.outcome}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        marginTop={4}
      >
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="/contact-page"
        >
          View More Case Studies
        </Button>
      </Box>
    </Box>
  );
};

export default CaseStudies;

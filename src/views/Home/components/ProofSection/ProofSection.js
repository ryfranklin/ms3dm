import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { PerformanceMetrics, DataFlowPipeline, AnalyticsDashboard } from 'components/DataVisualizations';

const proofData = [
  {
    metric: '30%',
    description: 'Reduced scan-to-model time for industrial clients',
    icon: <PerformanceMetrics size={120} />,
  },
  {
    metric: '25%',
    description: 'Cut asset data management costs through automation',
    icon: <DataFlowPipeline size={120} />,
  },
  {
    metric: '5+',
    description: 'Integrated 3D datasets from platforms, improving coordination',
    icon: <AnalyticsDashboard size={120} />,
  },
];

const ProofSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.alternate.main,
        paddingY: 8,
      }}
    >
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
            marginBottom: 2,
          }}
        >
          Proven Results
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          sx={{ fontWeight: 400 }}
        >
          Measurable outcomes that demonstrate our impact on enterprise 3D data workflows
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {proofData.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                padding: 3,
                backgroundColor: theme.palette.background.paper,
                boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.15)}`,
                },
              }}
              data-aos={'fade-up'}
              data-aos-delay={i * 200}
            >
              <CardContent>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  marginBottom={2}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="h3"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 1,
                  }}
                >
                  {item.metric}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ fontWeight: 500 }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProofSection;

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
    metric: '5-6%',
    description: 'higher productivity and profitability for data-driven companies (McKinsey)',
    source: 'Business Impact',
    icon: <PerformanceMetrics size={120} />,
  },
  {
    metric: '$274B',
    description: 'global business intelligence market value by 2030, growing at 13% CAGR',
    source: 'Market Growth',
    icon: <DataFlowPipeline size={120} />,
  },
  {
    metric: '58%',
    description: 'of executives say data analytics improves decision-making speed (Gartner)',
    source: 'Decision Speed',
    icon: <AnalyticsDashboard size={120} />,
  },
  {
    metric: '65%',
    description: 'of organizations plan to become data-driven by 2026 (Forrester)',
    source: 'Industry Trend',
    icon: <PerformanceMetrics size={120} />,
  },
  {
    metric: '3x',
    description: 'more likely to report significant improvement in decision-making with advanced analytics',
    source: 'Performance Impact',
    icon: <DataFlowPipeline size={120} />,
  },
  {
    metric: '70%',
    description: 'of executives report data and analytics as critical to their business strategy',
    source: 'Strategic Importance',
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
          The Data-Driven Advantage
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          sx={{ fontWeight: 400 }}
        >
          Industry-leading statistics that demonstrate the transformative power of data-driven decision making
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {proofData.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                padding: 2.5,
                backgroundColor: theme.palette.background.paper,
                boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 30px ${alpha(theme.palette.primary.main, 0.15)}`,
                },
              }}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
            >
              <CardContent>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  marginBottom={1.5}
                  color={theme.palette.primary.main}
                  sx={{ opacity: 0.8 }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="h3"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 1,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  {item.metric}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: 500, marginBottom: 1, minHeight: 48 }}
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ 
                    fontWeight: 400,
                    fontStyle: 'italic',
                    display: 'block',
                    marginTop: 1,
                  }}
                >
                  {item.source}
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

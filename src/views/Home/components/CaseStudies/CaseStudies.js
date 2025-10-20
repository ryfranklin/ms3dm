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
    client: 'Global Retail Corporation',
    sector: 'Retail & E-Commerce',
    challenge: 'Disconnected sales, inventory, and customer data across 200+ stores prevented real-time decision-making and resulted in stockouts and excess inventory.',
    solution: 'Implemented unified data platform with real-time analytics, predictive inventory modeling, and automated dashboards across all touchpoints.',
    outcome: 'Reduced stockouts by 35%, optimized inventory levels saving $3M annually, and improved customer satisfaction scores by 40%.',
    metric: '35%',
    metricLabel: 'Fewer Stockouts',
    additionalMetrics: '$3M+ annual savings',
  },
  {
    client: 'Financial Services Firm',
    sector: 'Banking & Finance',
    challenge: 'Manual reporting processes took weeks to complete, preventing timely strategic decisions and regulatory compliance challenges.',
    solution: 'Built automated BI platform with self-service analytics, real-time KPI dashboards, and compliance monitoring integrated with core systems.',
    outcome: 'Reduced reporting time from 3 weeks to 2 hours, improved regulatory compliance, and accelerated strategic decision-making by 60%.',
    metric: '60%',
    metricLabel: 'Faster Decisions',
    additionalMetrics: '99.5% compliance rate',
  },
  {
    client: 'Healthcare System',
    sector: 'Healthcare & Medical',
    challenge: 'Patient data scattered across 15+ systems made it impossible to get holistic views, impacting care quality and operational efficiency.',
    solution: 'Deployed integrated analytics platform with patient journey visualization, predictive risk modeling, and automated quality metrics.',
    outcome: 'Improved patient outcomes by 25%, reduced readmission rates by 30%, and saved 500+ clinical hours per month on reporting.',
    metric: '25%',
    metricLabel: 'Better Outcomes',
    additionalMetrics: '30% fewer readmissions',
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
          See how enterprises are transforming their business with data-driven decision making
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
                      marginBottom: 1,
                    }}
                  >
                    {study.client}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      marginBottom: 3,
                      display: 'block',
                    }}
                  >
                    {study.sector}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      borderRadius: 2,
                      marginTop: 2,
                      marginBottom: 3,
                    }}
                  >
                    <Box sx={{ textAlign: 'center', flex: 1 }}>
                      <Typography
                        variant="h3"
                        color="primary"
                        sx={{ fontWeight: 700, fontSize: '2.5rem' }}
                      >
                        {study.metric}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontWeight: 500 }}
                      >
                        {study.metricLabel}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 1,
                        height: 40,
                        backgroundColor: alpha(theme.palette.divider, 0.3),
                        marginX: 2,
                      }}
                    />
                    <Box sx={{ textAlign: 'center', flex: 1 }}>
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontWeight: 600, fontSize: '1rem' }}
                      >
                        {study.additionalMetrics}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        Additional Impact
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box marginBottom={2}>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontWeight: 600, marginBottom: 1 }}
                  >
                    Challenge
                  </Typography>
                  <Typography variant="body2" color="text.secondary" marginBottom={2}>
                    {study.challenge}
                  </Typography>
                  
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontWeight: 600, marginBottom: 1 }}
                  >
                    Solution
                  </Typography>
                  <Typography variant="body2" color="text.secondary" marginBottom={2}>
                    {study.solution}
                  </Typography>
                  
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontWeight: 600, marginBottom: 1 }}
                  >
                    Outcome
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

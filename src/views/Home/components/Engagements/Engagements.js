import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

/*
 * How engagements start. A crawl-walk-run ladder that leads with a readiness
 * assessment, then platform and BI modernization, then ML and guardrailed
 * agents. Same hairline-card pattern as the rest of the practice sections.
 */
const stages = [
  {
    stage: 'Crawl',
    title: 'AI & Data Readiness Assessment',
    body:
      'A 2 to 4 week engagement: inventory source systems, map data flows, ' +
      'grade data quality and governance, and assess whether the data can ' +
      'actually feed the AI you want. You get an executive-ready roadmap ' +
      'with sequencing and cost, not a sales deck.',
  },
  {
    stage: 'Walk',
    title: 'Platform, warehouse & BI modernization',
    body:
      'Design and build the foundation: a dimensional warehouse or a ' +
      'medallion lakehouse on AWS, governed pipelines, and the reporting ' +
      'layer the business runs on. Provisioned as Terraform, released as code.',
  },
  {
    stage: 'Run',
    title: 'ML & guardrailed agents',
    body:
      'Predictive signals and agentic systems on top of a foundation that ' +
      'can support them: SageMaker MLOps, retrieval done properly, and a ' +
      'Bedrock guardrail on every call.',
  },
];

const Engagements = () => {
  return (
    <Box sx={{ paddingY: { xs: 8, md: 12 } }}>
      <Box marginBottom={6} sx={{ maxWidth: 740 }}>
        <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
          How engagements start
        </Typography>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{ fontWeight: 600, marginBottom: 2 }}
        >
          Ground-up, in sequence.
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
          Most work starts with a readiness assessment so the roadmap is grounded
          before anything gets built. From there the sequence is deliberate: get
          the data trustworthy, modernize the platform and reporting, then put
          predictive ML and guardrailed agents on top. For teams that need
          direction more than delivery, the same experience is available as
          fractional CTO and technical advisory engagements.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {stages.map((item, i) => (
          <Grid item xs={12} md={4} key={item.stage}>
            <Card sx={{ height: '100%' }} data-aos="fade-up" data-aos-delay={i * 120}>
              <CardContent sx={{ padding: 3.5 }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'text.disabled',
                    marginBottom: 2,
                  }}
                >
                  {item.stage}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {item.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box marginTop={4}>
        <Button component="a" href="/contact-page" variant="text" size="large">
          Start with a readiness assessment →
        </Button>
      </Box>
    </Box>
  );
};

export default Engagements;

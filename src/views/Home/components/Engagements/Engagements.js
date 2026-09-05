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
    offer: '$15k to $25k fixed · 2 to 4 weeks',
    body:
      'Inventory source systems, map data flows, grade data quality and ' +
      'governance, and assess whether the data can actually feed the AI you ' +
      'want. You get an executive-ready roadmap with sequencing and cost, not ' +
      'a sales deck. Default entry for most buyers.',
  },
  {
    stage: 'Walk',
    title: 'Lakehouse Architecture Design',
    offer: 'Platform, warehouse & BI modernization · scoped after Assessment',
    body:
      'Design and build the foundation: a dimensional warehouse or a ' +
      'medallion lakehouse on AWS (Iceberg/Glue, or Snowflake where the data ' +
      'lives), governed pipelines, IaC, and the reporting layer the business ' +
      'runs on. Typical range $30k to $60k fixed for a 4 to 8 week design.',
  },
  {
    stage: 'Run',
    title: 'ML Platform Architecture',
    offer: 'ML & guardrailed agents · scoped after Assessment',
    body:
      'Predictive signals and agentic systems on a foundation that can ' +
      'support them: feature store, SageMaker MLOps, retrieval done properly, ' +
      'and a Bedrock guardrail on every call. Typical range $30k to $60k ' +
      'fixed for a 4 to 8 week architecture engagement.',
  },
];

const Engagements = () => {
  return (
    <Box id="engagements" sx={{ paddingY: { xs: 8, md: 12 } }}>
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
          embedded leadership without a full-time hire, Fractional Head of Data
          sits beside this ladder and often feeds Assessment or architecture work.
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
                <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.04em',
                    color: 'text.secondary',
                    marginBottom: 1.5,
                  }}
                >
                  {item.offer}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {item.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography
        color="text.secondary"
        sx={{
          marginTop: 3,
          maxWidth: 740,
          lineHeight: 1.65,
          fontSize: '0.95rem',
        }}
      >
        After Walk or Run, Mode A managed delivery is available as a follow-on:
        operate the platform in a per-client AWS Org account on a retainer plus
        AWS pass-through (or all-in monthly). Delivery in your account and DIY
        handoff remain options; Mode A is for teams that want the platform run,
        not only designed.
      </Typography>

      <Box marginTop={4}>
        <Button component="a" href="/contact-page#assessment" variant="text" size="large">
          Start with a readiness assessment →
        </Button>
      </Box>
    </Box>
  );
};

export default Engagements;

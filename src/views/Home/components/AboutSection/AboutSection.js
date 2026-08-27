import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from 'components/Container';
import ServiceNetwork from 'components/ServiceNetwork';

/*
 * About the practice. Independent, principal-level, AWS-native. Direct and
 * precise, no consultancy filler.
 */
const principles = [
  {
    label: 'Governed by default',
    body: 'Catalogs, lineage, access control, and schema-as-code are part of the design, not a later cleanup. It is how a warehouse stays trustworthy and how an agent stays inside its bounds.',
  },
  {
    label: 'Guardrailed on every call',
    body: 'Agentic systems ship with policy enforcement inline, so autonomy stays inside its bounds.',
  },
  {
    label: 'Infrastructure as code',
    body: 'Platforms are provisioned with Terraform: reproducible, reviewable, and versioned.',
  },
];

const AboutSection = () => {
  return (
    <Box
      sx={{
        paddingY: { xs: 8, md: 12 },
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-soft)',
      }}
    >
      <Container paddingY={'0 !important'}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              component="p"
              color="text.secondary"
              gutterBottom
            >
              The practice
            </Typography>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: 600, marginBottom: 3 }}
            >
              An independent data and AI consultancy, operating at principal level.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ marginBottom: 2.5, lineHeight: 1.8 }}
            >
              ms3dm.tech is an independent consultancy led by a principal data
              architect and AI/ML engineer. Engagements range from hands-on
              delivery to fractional CTO and technical advisory work, and span
              two connected problems: making enterprise data trustworthy and
              queryable, and putting agentic AI on top of it without giving up
              control.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ marginBottom: 4, lineHeight: 1.8 }}
            >
              That means lakehouse modernization on AWS (S3 and Iceberg, Glue and
              Spark, Step Functions, SageMaker Unified Studio) and agentic
              systems built with retrieval, reranking, and Bedrock guardrails.
              The through-line is engineering discipline: things that run in
              production, not slideware. The same discipline runs through a SQL
              Server warehouse with SSIS and Power BI as through a lakehouse on
              S3 and Iceberg: model it right, govern it, and ship it as code.
              AWS is home base; the same approach carries to Snowflake, Azure,
              and GCP where the data already lives.
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
              {principles.map((p) => (
                <Box key={p.label} display="flex" alignItems="flex-start" gap={1.5}>
                  <Box
                    component="span"
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: 'var(--white)',
                      marginTop: '9px',
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 600 }} color="text.primary">
                      {p.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.body}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                backgroundColor: 'var(--surface)',
                paddingY: 4,
              }}
            >
              <ServiceNetwork height={300} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

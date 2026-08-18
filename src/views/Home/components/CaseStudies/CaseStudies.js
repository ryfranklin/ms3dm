import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

/*
 * Selected work. Flagship projects described at capability level. No invented
 * metrics, client names, or logos: the specifics of the systems do the selling.
 *
 * To surface a live demo, set `link` on the relevant entry to its URL. Left null
 * where no public link is provided.
 */
const work = [
  {
    kicker: 'Flagship project / Homebase',
    title: 'Homebase: a production personal AI platform',
    body:
      'A production personal AI platform. A plan-and-execute agent reasons over a private knowledge base using semantic retrieval, then acts through tools, with a Bedrock Guardrail on every call so the system stays inside its constraints. Built in the open on AWS.',
    tags: ['Bedrock AgentCore', 'RAG', 'Guardrails', 'Terraform'],
    to: '/homebase',
    cta: 'Explore the project',
    link: null,
  },
  {
    kicker: 'Enterprise data warehouse and BI',
    title: 'An enterprise data warehouse, built from the ground up',
    body:
      'A SQL Server enterprise data warehouse designed and built from scratch: a ' +
      'dimensional model fed by SSIS pipelines from point-of-sale, document ' +
      'management, and logistics systems, with a Power BI reporting layer the ' +
      'business runs on daily. Ongoing engineering keeps facts, dimensions, and ' +
      'reporting views correct as source systems change.',
    tags: ['SQL Server', 'Dimensional model', 'SSIS', 'Power BI'],
    link: null,
  },
  {
    kicker: 'Custom LOB application',
    title: 'An operations app with a private, self-hosted assistant',
    body:
      'A custom line-of-business web application (React and Express on Azure SQL) ' +
      'that consolidates daily operations into one workflow, extended with a ' +
      'self-hosted LLM assistant that answers from internal data through ' +
      'function-calling stored procedures. Self-hosted by design so regulated data ' +
      'never leaves the environment.',
    tags: ['React / Express', 'Azure SQL', 'Self-hosted LLM', 'Function calling'],
    link: null,
  },
  {
    kicker: 'Pipelines at enterprise scale',
    title: 'Enterprise ingestion and orchestration on a governed lakehouse',
    body:
      'Ingestion and orchestration for high-volume enterprise programs feeding an ' +
      'AWS medallion lakehouse: CDC and batch sources landed to S3 and Apache ' +
      'Iceberg, transformed with Glue and Spark, orchestrated on Airflow, with ' +
      'schema changes released as code through Liquibase across multiple database ' +
      'engines.',
    tags: ['S3 + Iceberg', 'Airflow', 'Fivetran CDC', 'Liquibase'],
    link: null,
  },
  {
    kicker: 'Guardrailed-agent demo',
    title: 'AI that clears legal and compliance constraints safely',
    body:
      'A demonstration of guardrails in practice: an agent works a task while a policy layer holds it to legal and compliance boundaries, showing how automated reasoning can move fast without stepping outside what it is allowed to do.',
    tags: ['Guardrails', 'Policy layer', 'Compliance', 'Agentic'],
    link: null,
  },
  {
    kicker: 'Agent-build runtime',
    title: 'Gated delivery runtime for AI-DLC',
    body:
      'A runtime that drives agent-built software through a gated AI-DLC lifecycle: each stage is planned, produced, and approved before the next begins, so agentic delivery stays auditable and under human control.',
    tags: ['AI-DLC', 'Gated delivery', 'Orchestration', 'Auditable'],
    link: null,
  },
];

const CaseStudies = () => {
  return (
    <Box id="selected-work" sx={{ paddingY: { xs: 8, md: 12 } }}>
      <Box marginBottom={6} sx={{ maxWidth: 740 }}>
        <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
          Selected work
        </Typography>
        <Typography variant="h4" color="text.primary" sx={{ fontWeight: 600, marginBottom: 2 }}>
          Proof, not adjectives.
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
          Production systems across data warehousing, BI, enterprise pipelines,
          and agentic AI. Delivered, not slideware.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {work.map((item, i) => (
          <Grid item xs={12} md={4} key={item.title}>
            <Card sx={{ height: '100%' }} data-aos="fade-up" data-aos-delay={i * 120}>
              <CardContent
                sx={{
                  padding: 3.5,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="overline" component="p" color="text.disabled" gutterBottom>
                  {item.kicker}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary" sx={{ marginBottom: 3, lineHeight: 1.65 }}>
                  {item.body}
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1} sx={{ marginTop: 'auto' }}>
                  {item.tags.map((tag) => (
                    <Box
                      key={tag}
                      component="span"
                      sx={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'text.secondary',
                        border: '1px solid var(--border)',
                        borderRadius: 999,
                        paddingX: 1.2,
                        paddingY: 0.4,
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
                {item.to && (
                  <Box marginTop={2}>
                    <Button component="a" href={item.to} variant="text" size="small">
                      {item.cta || 'Learn more'} →
                    </Button>
                  </Box>
                )}
                {item.link && (
                  <Box marginTop={2}>
                    <Button
                      component="a"
                      href={item.link}
                      variant="text"
                      size="small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View live demo
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CaseStudies;

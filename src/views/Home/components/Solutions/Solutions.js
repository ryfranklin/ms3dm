import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/*
 * "What I do" - five hairline cards covering the practice: the proven data
 * warehousing and BI foundation first, then data platforms, agentic AI, and ML
 * systems, closing with fractional CTO and technical advisory. Copy is grounded
 * in real capability, no adjectives standing in for specifics.
 */
const pillars = [
  {
    index: '01',
    title: 'Data Warehousing & BI',
    body:
      'Dimensional data warehouses and the reporting layer the business runs on: ' +
      'SQL Server star schemas, SSIS ETL from POS and line-of-business systems, and ' +
      'Power BI models. High availability with SQL Server Always On, and database ' +
      'releases governed as code with Liquibase across multiple engines.',
    tags: ['SQL Server', 'SSIS ETL', 'Power BI', 'Always On AG', 'Liquibase'],
  },
  {
    index: '02',
    title: 'Data Platforms',
    body:
      'Medallion lakehouse architecture on AWS: S3 plus Apache Iceberg tables, Glue and Spark transforms, Fivetran CDC ingestion, and Step Functions orchestration. Governed catalogs and reliable pipelines, provisioned as Terraform.',
    tags: ['S3 + Iceberg', 'Glue / Spark', 'Fivetran CDC', 'Step Functions'],
  },
  {
    index: '03',
    title: 'Agentic AI',
    body:
      'Multi-agent orchestration with plan-and-execute control loops. Retrieval done properly: semantic search with vector stores and reranking, Bedrock model integration, and guardrails enforced on every call.',
    tags: ['Bedrock', 'RAG + rerank', 'Guardrails', 'Multi-agent'],
  },
  {
    index: '04',
    title: 'ML Systems',
    body:
      'Signal engineering and predictive models: momentum, churn, and next-best-action style signals. Trained, tracked, and deployed with MLOps on SageMaker, from feature pipelines to monitored inference.',
    tags: ['SageMaker', 'MLOps', 'Signal engineering', 'Monitoring'],
  },
  {
    index: '05',
    title: 'Fractional CTO & Advisory',
    body:
      'Principal-level technical leadership without the headcount: architecture ' +
      'direction, technology strategy, build-vs-buy and roadmap calls, and ' +
      'engineering standards. Hands-on in the design and the codebase, not the ' +
      'org chart, with clear ownership from decision to production.',
    tags: ['Architecture', 'Tech strategy', 'Roadmap', 'Standards', 'Due diligence'],
  },
];

const Solutions = () => {
  return (
    <Box sx={{ paddingY: { xs: 8, md: 12 } }}>
      <Box marginBottom={6} sx={{ maxWidth: 740 }}>
        <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
          What I do
        </Typography>
        <Typography variant="h4" color="text.primary" sx={{ fontWeight: 600 }}>
          Five disciplines, one delivery standard.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {pillars.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={item.index}>
            <Card
              sx={{ height: '100%' }}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <CardContent sx={{ padding: 3.5 }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    color: 'text.disabled',
                    letterSpacing: '0.08em',
                    marginBottom: 2,
                  }}
                >
                  {item.index}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, marginBottom: 1.5 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary" sx={{ marginBottom: 3, lineHeight: 1.65 }}>
                  {item.body}
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';

/*
 * Capabilities / stack strip. Mono tags for the tools the practice runs on,
 * grouped by discipline. Full-bleed band so it reads as an app-like shell rather
 * than a prose column.
 */
const groups = [
  {
    label: 'Data & BI',
    tags: [
      'SQL Server',
      'SSIS',
      'Power BI',
      'Dimensional modeling',
      'Always On AG',
      'Azure SQL',
    ],
  },
  {
    label: 'Governance',
    tags: [
      'Data cataloging',
      'Lineage',
      'Access control',
      'Liquibase schema-as-code',
      'Data dictionary',
      'Lake Formation',
    ],
  },
  {
    label: 'Lakehouse',
    tags: [
      'Amazon S3',
      'Apache Iceberg',
      'AWS Glue',
      'Apache Spark',
      'Fivetran CDC',
      'Step Functions',
      'SageMaker Unified Studio',
      'Terraform',
    ],
  },
  {
    label: 'Agentic AI',
    tags: [
      'Amazon Bedrock',
      'Multi-agent orchestration',
      'Plan-and-execute',
      'Vector search',
      'Reranking',
      'Guardrails',
    ],
  },
  {
    label: 'ML / MLOps',
    tags: [
      'Amazon SageMaker',
      'Feature pipelines',
      'Predictive signals',
      'Model monitoring',
    ],
  },
];

// Shared sx for a mono capability tag.
const tagSx = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.78rem',
  color: 'text.primary',
  backgroundColor: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 999,
  paddingX: 1.5,
  paddingY: 0.6,
  transition: 'border-color 0.25s var(--ease), background-color 0.25s var(--ease)',
  '&:hover': {
    borderColor: 'var(--border-strong)',
    backgroundColor: 'var(--surface-2)',
  },
};

const ProofSection = () => {
  return (
    <Box
      sx={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg-soft)',
      }}
    >
      <Container paddingY={{ xs: 6, md: 8 }}>
        <Typography
          variant="overline"
          component="p"
          color="text.secondary"
          sx={{ marginBottom: 4 }}
        >
          Capabilities and stack
        </Typography>

        <Box display="flex" flexDirection="column" gap={4}>
          {groups.map((group) => (
            <Box
              key={group.label}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '160px 1fr' },
                gap: { xs: 1.5, md: 3 },
                alignItems: 'baseline',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'text.disabled',
                }}
              >
                {group.label}
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {group.tags.map((tag) => (
                  <Box key={tag} component="span" sx={tagSx}>
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProofSection;

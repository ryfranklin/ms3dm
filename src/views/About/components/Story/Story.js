/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { DataArchitectureInsights } from 'components/DataVisualizations';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        backgroundColor: 'var(--surface)',
        padding: { xs: 3, md: 6 },
        marginBottom: 4,
      }}
    >
      <Grid container spacing={6} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'flex-start'} xs={12} md={6}>
          <Box>
            <Typography
              variant={'h3'}
              gutterBottom
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                marginBottom: 3,
              }}
            >
              About the Practice
            </Typography>
            <Typography
              component={'p'}
              sx={{
                color: 'text.secondary',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                marginBottom: 2,
              }}
            >
              ms3dm.tech is an independent practice run by a single senior data architect and AI/ML engineer. I design and build the systems myself, from the lakehouse foundation up to the agents that run on top of it, without the layers that usually sit between the problem and the person solving it.
            </Typography>
            <Typography
              component={'p'}
              sx={{
                color: 'text.secondary',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                marginBottom: 2,
              }}
            >
              On the data side I build medallion lakehouse architectures on AWS: S3 and Apache Iceberg for storage, Glue and Spark for transformation, Fivetran for change data capture, Step Functions for orchestration, and Terraform to keep it all reproducible. The result is a governed catalog and pipelines you can actually trust.
            </Typography>
            <Typography
              component={'p'}
              sx={{
                color: 'text.secondary',
                fontSize: '1.05rem',
                lineHeight: 1.8,
              }}
            >
              On the AI side I work in agentic and multi-agent systems, RAG done properly (semantic retrieval with vector search and reranking), and Amazon Bedrock integrations that run guardrailed on every call. I also handle the ML signal engineering, momentum, churn, and next-best-action prediction, and the MLOps to keep those models running on SageMaker.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box width={1}>
            <DataArchitectureInsights size={500} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;

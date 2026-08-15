import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/*
 * Scannable technical highlights. Copy is taken from the project summary and
 * kept precise, no em dashes.
 */
const highlights = [
  {
    title: 'Agent runtime on Bedrock AgentCore',
    body:
      'A tool-use loop over knowledge-base search and live connectors, streaming its answer token by token, with a Bedrock Guardrail on every Converse call so one governance layer protects all doors at the model boundary.',
  },
  {
    title: 'Retrieval on S3 Vectors',
    body:
      'A Bedrock Knowledge Base on S3 Vectors: semantic retrieval plus Bedrock Rerank. Hybrid search is a gated OpenSearch Serverless seam.',
  },
  {
    title: 'Auth via Amazon Cognito',
    body: 'Authentication through Amazon Cognito with Google federation.',
  },
  {
    title: 'Web GUI and streaming backend-for-frontend',
    body:
      'The web GUI is a React SPA on CloudFront. The streaming backend-for-frontend is a Lambda Function URL with SSE response streaming, not behind API Gateway.',
  },
  {
    title: 'Multiple front doors, one agent runtime',
    body:
      'The web GUI, a thin chat CLI on Fargate, a Slack bridge (slack-bolt Socket Mode on Fargate, VPC-internal, no inbound, email allow-list), and an EC2 workstation reached over SSM with no public SSH.',
  },
  {
    title: 'Six live connectors, read-first and write-gated',
    body:
      'Gmail, Calendar, Drive, Slack, Jira, and Confluence. Per-user OAuth via AgentCore Identity, also exposed as MCP tools through an AgentCore Gateway, linked once via a self-service consent flow.',
  },
  {
    title: 'A git-authoritative vault',
    body:
      'A Fargate worker owns the clone and commits every write, so notes and plans are versioned and attributed from git. The S3 corpus is the derived knowledge-base mirror.',
  },
  {
    title: 'Flight Planner to Mission Control',
    body:
      'A Flight Planner runs an AI-DLC INCEPTION interview into reviewed flight plans, each unit carrying its own acceptance criteria, handed to Mission Control (a durable, cost-metered coding-agent orchestrator on Fargate plus RDS) behind a go/no-go gate. A verify node runs the target repo’s own tests and build and can only add a block, never flip a no-go to a go. Design in from Confluence, tickets out to Jira.',
  },
  {
    title: 'All infrastructure as Terraform IaC',
    body:
      'Every resource is defined as Terraform, roughly 16 Terraform stacks across 7 services.',
  },
];

const WhatItIs = () => {
  return (
    <Box sx={{ paddingY: { xs: 8, md: 12 } }}>
      <Box marginBottom={6} sx={{ maxWidth: 740 }}>
        <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
          What it is
        </Typography>
        <Typography variant="h4" color="text.primary" sx={{ fontWeight: 600, marginBottom: 2 }}>
          One agent runtime, guardrailed at the model boundary.
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
          The technical shape of the platform, from the agent loop and retrieval
          down to the front doors, connectors, and delivery pipeline.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {highlights.map((item, i) => (
          <Grid item xs={12} md={6} key={item.title}>
            <Card sx={{ height: '100%' }} data-aos="fade-up" data-aos-delay={(i % 2) * 100}>
              <CardContent sx={{ padding: 3.5, display: 'flex', gap: 2 }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    color: 'text.disabled',
                    letterSpacing: '0.08em',
                    lineHeight: 1.6,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
                    {item.body}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatItIs;

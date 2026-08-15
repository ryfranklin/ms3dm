import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';

const tags = [
  'AWS',
  'Bedrock AgentCore',
  'Bedrock Guardrails',
  'Bedrock Knowledge Base',
  'S3 Vectors',
  'Bedrock Rerank',
  'Cognito',
  'Lambda (Function URL / SSE)',
  'CloudFront',
  'Fargate',
  'EC2 + SSM',
  'RDS',
  'Slack (Socket Mode)',
  'React SPA',
  'Anthropic Claude',
  'Terraform',
];

const TechStack = () => {
  return (
    <Box
      sx={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg-soft)',
      }}
    >
      <Container paddingY={{ xs: 6, md: 8 }}>
        <Typography variant="overline" component="p" color="text.secondary" sx={{ marginBottom: 3 }}>
          Tech stack
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {tags.map((tag) => (
            <Box
              key={tag}
              component="span"
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'text.primary',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 999,
                paddingX: 1.5,
                paddingY: 0.6,
                transition:
                  'border-color 0.25s var(--ease), background-color 0.25s var(--ease)',
                '&:hover': {
                  borderColor: 'var(--border-strong)',
                  backgroundColor: 'var(--surface-2)',
                },
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TechStack;

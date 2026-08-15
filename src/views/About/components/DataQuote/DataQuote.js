import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';

const DataQuote = () => {

  return (
    <Box
      sx={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg-soft)',
        paddingY: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 820,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'text.disabled', marginBottom: 3 }}
          >
            The principle this practice is built on
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              marginBottom: 4,
              letterSpacing: '-0.02em',
              fontSize: { xs: '1.9rem', md: '2.75rem' },
            }}
          >
            &quot;A model is only as trustworthy as the data and the guardrails behind it.&quot;
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.15rem' },
            }}
          >
            Good AI starts with a governed lakehouse and reliable pipelines, then adds retrieval that actually returns the right context and guardrails that hold on every call. I build both halves: the Iceberg-backed data foundation on AWS and the guardrailed, agentic systems that reason over it. No hand-waving, no black boxes you cannot inspect.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DataQuote;

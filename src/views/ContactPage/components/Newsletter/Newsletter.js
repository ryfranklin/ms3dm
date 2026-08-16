import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

/*
 * Substack subscription block. The writing lives on Substack (the canonical
 * channel), so this links out to the Substack subscribe page rather than
 * capturing email here (a static SPA cannot post to Substack cross-origin).
 */
const SUBSTACK_SUBSCRIBE_URL = 'https://ryanfranklin3.substack.com/subscribe';

const Newsletter = () => {
  return (
    <Box
      sx={{
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        backgroundColor: 'var(--surface)',
        paddingY: { xs: 5, md: 7 },
      }}
    >
      <Container paddingY={'0 !important'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box marginBottom={4} sx={{ maxWidth: 620 }}>
            <Typography
              variant="overline"
              component="p"
              align={'center'}
              color="text.secondary"
              gutterBottom
            >
              Compendium
            </Typography>
            <Typography
              variant="h4"
              align={'center'}
              gutterBottom
              sx={{ fontWeight: 600, color: 'text.primary' }}
            >
              Notes on Data and AI Engineering
            </Typography>
            <Typography
              variant="h6"
              align={'center'}
              sx={{ color: 'text.secondary', fontWeight: 400 }}
            >
              Occasional notes on AWS lakehouses, reliable pipelines, RAG, and agentic AI, straight from the work. Subscribe on Substack to get them in your inbox.
            </Typography>
          </Box>
          <Button
            component="a"
            variant="contained"
            color="primary"
            size="large"
            href={SUBSTACK_SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe on Substack
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;

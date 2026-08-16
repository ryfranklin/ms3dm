import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const GITHUB_URL = 'https://github.com/ryfranklin/Homebase';
const ISSUES_URL = 'https://github.com/ryfranklin/Homebase/issues';

const ways = [
  {
    label: 'Star or fork on GitHub',
    body: 'The repo is public and licensed. Clone it, read it, build on it.',
    href: GITHUB_URL,
    cta: 'Open the repo',
    external: true,
  },
  {
    label: 'Open an issue or discussion',
    body: 'Questions, ideas, and critiques on the architecture are all welcome.',
    href: ISSUES_URL,
    cta: 'Open an issue',
    external: true,
  },
  {
    label: 'Start a conversation',
    body: 'Send a message and I will reply personally, or email ryan.franklin@ms3dm.tech directly.',
    href: '/contact-page',
    cta: 'Send a message',
    external: false,
  },
];

const Collaborate = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{ paddingY: { xs: 8, md: 12 } }}>
      <Box
        sx={{
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          backgroundColor: 'var(--surface)',
          paddingX: { xs: 3, md: 8 },
          paddingY: { xs: 6, md: 9 },
        }}
      >
        <Box sx={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 40px' }}>
          <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
            Collaborate
          </Typography>
          <Typography
            variant="h3"
            color="text.primary"
            sx={{ fontWeight: 600, marginBottom: 2, fontSize: { xs: '1.9rem', md: '2.5rem' } }}
          >
            Built in the open.
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.7, marginBottom: 4 }}>
            Homebase is built in the open. If you are working on agentic AI, RAG,
            or AWS Bedrock and AgentCore architecture, I would like to compare
            notes.
          </Typography>
          <Button
            component="a"
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Button>
        </Box>

        <Grid container spacing={3}>
          {ways.map((way) => (
            <Grid item xs={12} md={4} key={way.label}>
              <Box
                sx={{
                  height: '100%',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-soft)',
                  padding: 3,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography sx={{ fontWeight: 600, marginBottom: 1 }} color="text.primary">
                  {way.label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3, lineHeight: 1.6 }}>
                  {way.body}
                </Typography>
                <Box sx={{ marginTop: 'auto' }}>
                  <Button
                    component="a"
                    href={way.href}
                    variant="outlined"
                    color="primary"
                    size="small"
                    {...(way.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {way.cta}
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Collaborate;

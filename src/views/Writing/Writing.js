import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Main from 'layouts/Main';
import Container from 'components/Container';
import PostCard from './components/PostCard';
import { usePosts, SUBSTACK_URL } from './utils/posts';

const DEFAULT_TAGLINE = 'Building modern data systems, one micro-project at a time.';

const SubscribeButton = ({ fullWidth = false }) => (
  <Button
    component="a"
    variant="contained"
    color="primary"
    size="large"
    href={SUBSTACK_URL}
    target="_blank"
    rel="noopener noreferrer"
    fullWidth={fullWidth}
  >
    Subscribe on Substack
  </Button>
);

SubscribeButton.propTypes = {
  fullWidth: PropTypes.bool,
};

const EmptyState = () => (
  <Box
    sx={{
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      backgroundColor: 'var(--surface)',
      padding: { xs: 4, md: 7 },
      textAlign: 'center',
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
      Posts are published on Substack.
    </Typography>
    <Typography color="text.secondary" sx={{ maxWidth: 520, margin: '0 auto 24px', lineHeight: 1.7 }}>
      The latest writing lives on Substack. Head over to read and subscribe.
    </Typography>
    <SubscribeButton />
  </Box>
);

const LoadingState = () => (
  <Typography
    sx={{ fontFamily: 'var(--font-mono)', color: 'text.disabled', fontSize: '0.85rem' }}
  >
    Loading the latest writing…
  </Typography>
);

const Writing = () => {
  const { status, channel, posts } = usePosts();
  const tagline = (channel && channel.description) || DEFAULT_TAGLINE;

  const [lead, ...rest] = posts;

  return (
    <Main>
      <Container>
        <Box paddingTop={{ xs: 4, md: 6 }} paddingBottom={{ xs: 2, md: 4 }}>
          <Grid container spacing={3} alignItems="flex-end" justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
                Compendium
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                color="text.primary"
                sx={{ fontWeight: 600, marginBottom: 2, fontSize: { xs: '2.4rem', md: '3.2rem' } }}
              >
                Field notes
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 640, lineHeight: 1.65 }}>
                {tagline}
              </Typography>
            </Grid>
            <Grid item xs={12} md="auto">
              <SubscribeButton />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container paddingTop={'0 !important'} paddingBottom={{ xs: 8, md: 12 }}>
        {status === 'loading' && <LoadingState />}
        {status === 'empty' && <EmptyState />}

        {status === 'ready' && (
          <Box>
            {lead && (
              <Box marginBottom={3}>
                <PostCard post={lead} featured />
              </Box>
            )}
            <Grid container spacing={3}>
              {rest.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.guid || post.url}>
                  <PostCard post={post} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Main>
  );
};

export default Writing;

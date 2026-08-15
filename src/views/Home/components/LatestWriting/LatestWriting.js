import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';
import PostCard from 'views/Writing/components/PostCard';
import { usePosts } from 'views/Writing/utils/posts';

/*
 * Compact "Latest writing" strip for the Home page: the three newest Substack
 * posts with a link to the full Writing page. If the posts JSON is missing or
 * empty, the strip renders nothing so it never leaves a broken gap.
 */
const LatestWriting = () => {
  const { status, posts } = usePosts();

  if (status !== 'ready' || !posts.length) {
    return null;
  }

  const latest = posts.slice(0, 3);

  return (
    <Box
      sx={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-soft)',
      }}
    >
      <Container paddingY={{ xs: 8, md: 12 }}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
          gap={2}
          marginBottom={5}
        >
          <Box sx={{ maxWidth: 640 }}>
            <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
              Compendium
            </Typography>
            <Typography variant="h4" color="text.primary" sx={{ fontWeight: 600 }}>
              Field notes from the work.
            </Typography>
          </Box>
          <Button component="a" href="/compendium" variant="outlined" color="primary">
            Read all posts
          </Button>
        </Box>

        <Grid container spacing={3}>
          {latest.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.guid || post.url}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LatestWriting;

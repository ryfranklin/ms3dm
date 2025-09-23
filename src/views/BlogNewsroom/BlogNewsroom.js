import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  FeaturedArticles,
  Hero,
  LatestStories,
  MostViewedArticles,
  PopularNews,
  SidebarArticles,
  Tags,
} from './components';

import { getBlogPosts } from 'services/strapi';

const BlogNewsroom = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getBlogPosts();
        console.log('Raw Strapi Response:', response);
        setPosts(response.data || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // If no posts, show a message
  if (!posts || posts.length === 0) {
    return (
      <Main>
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '50vh',
            }}
          >
            <Typography variant="h5" color="text.secondary">
              No blog posts available yet.
            </Typography>
          </Box>
        </Container>
      </Main>
    );
  }

  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <PopularNews posts={posts.slice(0, 4)} />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <FeaturedArticles posts={posts.slice(0, 2)} />
        </Container>
      </Box>
      <Container>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <LatestStories posts={posts} />
          </Grid>
          {isMd ? (
            <Grid item xs={12} md={4}>
              <SidebarArticles posts={posts.slice(0, 5)} />
            </Grid>
          ) : null}
        </Grid>
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Grid container spacing={isMd ? 4 : 0}>
            <Grid item xs={12}>
              <MostViewedArticles posts={posts.slice(0, 4)} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth={800}>
        <Tags />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
    </Main>
  );
};

export default BlogNewsroom;

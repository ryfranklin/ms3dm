import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { Link as RouterLink } from 'react-router-dom';

import { getBlogPosts } from 'services/strapi';

const SimilarStories = ({ post }) => {
  const theme = useTheme();
  const [similarPosts, setSimilarPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimilarPosts = async () => {
      try {
        if (!post?.categories?.length) {
          setLoading(false);
          return;
        }

        const response = await getBlogPosts();
        if (response.data) {
          // Filter posts that share at least one category with the current post
          // and exclude the current post
          const filtered = response.data.filter(p => 
            p.id !== post.id && 
            p.categories?.some(cat => 
              post.categories.some(currentCat => currentCat.id === cat.id)
            )
          );
          setSimilarPosts(filtered.slice(0, 3)); // Show up to 3 similar posts
        }
      } catch (error) {
        console.error('Error fetching similar posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarPosts();
  }, [post]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" padding={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (similarPosts.length === 0) {
    return null;
  }

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        marginBottom={4}
      >
        <Box>
          <Typography fontWeight={700} variant={'h6'} gutterBottom>
            Similar stories
          </Typography>
          <Typography color={'text.secondary'}>
            More articles in {post.categories.map(cat => cat.Name).join(', ')}
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button
            component={RouterLink}
            to="/blog"
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
          >
            View all
          </Button>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {similarPosts.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={RouterLink}
              to={`/blog/${item.slug}`}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  image={item.FeaturedImage?.data?.attributes?.url ? 
                    `http://localhost:1337${item.FeaturedImage.data.attributes.url}` :
                    'https://via.placeholder.com/400x300'
                  }
                  title={item.Title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                  }}
                >
                  <Box
                    component={'svg'}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: 'scale(2)',
                      height: 'auto',
                      width: 1,
                      transformOrigin: 'top center',
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position={'relative'}>
                  <Typography variant={'h6'} gutterBottom>
                    {item.Title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.Summary}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Box display={'flex'} alignItems={'center'}>
                      <Typography color={'text.secondary'}>
                        {item.author?.name || 'Author'}
                      </Typography>
                    </Box>
                    <Typography color={'text.secondary'}>
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

SimilarStories.propTypes = {
  post: PropTypes.object.isRequired,
};

export default SimilarStories;

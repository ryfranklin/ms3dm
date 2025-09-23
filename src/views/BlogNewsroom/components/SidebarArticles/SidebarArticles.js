/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const SidebarArticles = ({ posts = [] }) => {
  const theme = useTheme();
  const validPosts = posts.filter(post => post?.Title);

  return (
    <Box component={Card} variant={'outlined'} padding={2}>
      <Typography
        variant="h6"
        data-aos={'fade-up'}
        sx={{
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        Recent Articles
      </Typography>
      <Grid container spacing={2}>
        {validPosts.map((post, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={1}
              boxShadow={0}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50%' },
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    display: 'flex !important',
                  },
                }}
              >
                {post.FeaturedImage?.data?.attributes?.url ? (
                  <Box
                    component={LazyLoadImage}
                    height={1}
                    width={1}
                    src={`http://localhost:1337${post.FeaturedImage.data.attributes.url}`}
                    alt={post.Title}
                    effect="blur"
                    sx={{
                      objectFit: 'cover',
                      maxHeight: 120,
                      borderRadius: 2,
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.7)'
                          : 'none',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 120,
                      width: 1,
                      bgcolor: 'alternate.main',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      No image available
                    </Typography>
                  </Box>
                )}
              </Box>
              <CardContent
                sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}
              >
                <Typography fontWeight={700}>{post.Title}</Typography>
                <Box marginY={1 / 4}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
                  </Typography>
                </Box>
                <Button size={'small'} href={`/blog/${post.Slug}`}>
                  Read More
                </Button>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

SidebarArticles.propTypes = {
  posts: PropTypes.array,
};

export default SidebarArticles;

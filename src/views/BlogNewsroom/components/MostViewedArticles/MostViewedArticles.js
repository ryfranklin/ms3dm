import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const MostViewedArticles = ({ posts = [] }) => {
  const theme = useTheme();
  const validPosts = posts.filter(post => post?.Title);

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
            Most Viewed Articles
          </Typography>
          <Typography color={'text.secondary'}>
            Our most popular articles
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginLeft={2}
            href="/blog"
          >
            View all
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {validPosts.map((post, i) => (
          <Grid item xs={12} key={i}>
            <Box
              component={Card}
              width={1}
              height={1}
              borderRadius={0}
              boxShadow={0}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '30%' },
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
                      maxHeight: 200,
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
                      height: 200,
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
                sx={{
                  width: { xs: 1, md: '70%' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {post.Title}
                </Typography>
                <Box marginY={1}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {post.Summary || post.Content?.slice(0, 150) + '...'}
                </Typography>
                <Box marginTop={2} display={'flex'} justifyContent={'flex-end'}>
                  <Button
                    href={`/blog/${post.Slug}`}
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

MostViewedArticles.propTypes = {
  posts: PropTypes.array,
};

export default MostViewedArticles;

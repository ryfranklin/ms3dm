import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const FeaturedArticles = ({ posts = [] }) => {
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
            Featured Articles
          </Typography>
          <Typography color={'text.secondary'}>
            Latest featured articles from our blog
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button
            endIcon={<ChevronRightIcon />}
            href={'/blog'}
            variant="outlined"
            color="primary"
            size="large"
          >
            View all
          </Button>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {validPosts.map((post, i) => (
          <Grid
            item
            xs={12}
            md={6}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 200}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={'a'}
              href={`/blog/${post.Slug || ''}`}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1/2)})`,
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
                  component="div"
                  title={post.Title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                    bgcolor: 'alternate.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...(post.FeaturedImage?.data?.attributes?.url && {
                      backgroundImage: `url(http://localhost:1337${post.FeaturedImage.data.attributes.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }),
                  }}
                >
                  {!post.FeaturedImage?.data?.attributes?.url && (
                    <Typography variant="h6" color="text.secondary">
                      No image available
                    </Typography>
                  )}
                </CardMedia>
                <Box component={CardContent}>
                  <Typography variant={'h6'} fontWeight={700} gutterBottom>
                    {post.Title}
                  </Typography>
                  <Typography color="text.secondary">
                    {post.Summary || post.Content?.slice(0, 150) + '...'}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Typography
                      variant={'caption'}
                      color={'text.secondary'}
                      component={'i'}
                    >
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
                    </Typography>
                  </Box>
                  <Box
                    marginTop={2}
                    display={'flex'}
                    justifyContent={'flex-end'}
                  >
                    <Button
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
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

FeaturedArticles.propTypes = {
  posts: PropTypes.array,
};

export default FeaturedArticles;

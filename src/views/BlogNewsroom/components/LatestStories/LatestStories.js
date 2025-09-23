import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const LatestStories = ({ posts = [] }) => {
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
            Latest Stories
          </Typography>
          <Typography color={'text.secondary'}>
            Our latest blog posts and updates
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
          <Grid item xs={12} key={i}>
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
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <CardMedia
                  component="div"
                  title={post.Title}
                  sx={{
                    height: 240,
                    width: { xs: '100%', sm: 400 },
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
                <CardContent sx={{ flex: '1' }}>
                  <Box>
                    {post.categories?.map((category) => (
                      <Typography
                        key={category.id}
                        variant={'caption'}
                        color={'primary'}
                        sx={{ marginRight: 2 }}
                      >
                        {category.Name}
                      </Typography>
                    ))}
                  </Box>
                  <Typography
                    variant={'h6'}
                    fontWeight={700}
                    gutterBottom
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {post.Title}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    {post.Summary || post.Content?.slice(0, 200) + '...'}
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
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

LatestStories.propTypes = {
  posts: PropTypes.array,
};

export default LatestStories;

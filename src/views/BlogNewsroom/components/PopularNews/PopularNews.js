/* eslint-disable react/no-unescaped-entities */
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
import config from '../../../../config/environment';

const getContentPreview = (content) => {
  if (!content || !Array.isArray(content)) return '';
  
  // Find the first paragraph
  const firstParagraph = content.find(
    block => block.type === 'paragraph' && 
    block.children && 
    block.children[0] && 
    block.children[0].text
  );

  return firstParagraph ? firstParagraph.children[0].text : '';
};

const PopularNews = ({ posts = [] }) => {
  const theme = useTheme();
  console.log('PopularNews received posts:', posts); // Debug log
  
  // Filter out posts without required attributes
  const validPosts = posts.filter(post => {
    console.log('Checking post:', post); // Debug log
    return post?.Title;
  });

  console.log('Valid posts:', validPosts); // Debug log

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
            Popular news
          </Typography>
          <Typography color={'text.secondary'}>
            Here's what we've been up to recently.
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
          <Grid item xs={12} sm={6} md={3} key={i}>
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
                      backgroundImage: `url(${config.strapiURL}${post.FeaturedImage.data.attributes.url})`,
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
                <Box component={CardContent} position={'relative'}>
                  <Typography variant={'h6'} fontWeight={700} gutterBottom>
                    {post.Title}
                  </Typography>
                  <Typography color="text.secondary">
                    {post.Summary || getContentPreview(post.Content)}
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

PopularNews.propTypes = {
  posts: PropTypes.array,
};

export default PopularNews;

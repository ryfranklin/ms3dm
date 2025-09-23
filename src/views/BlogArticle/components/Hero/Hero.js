import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Hero = ({ post }) => {
  if (!post) return null;

  return (
    <Box
      position={'relative'}
      sx={{
        backgroundImage: post.FeaturedImage?.data?.attributes?.url
          ? `url(http://localhost:1337${post.FeaturedImage.data.attributes.url})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'alternate.main',
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      />
      <Box
        position={'relative'}
        zIndex={2}
        sx={{
          padding: { xs: 4, sm: 6 },
          paddingTop: { xs: 6, sm: 8 },
        }}
      >
        <Box>
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'common.white' }}>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/blog"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              Blog
            </Link>
            <Typography color="common.white">
              {post.Title}
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box marginTop={4}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: 'common.white',
              fontWeight: 700,
            }}
          >
            {post.Title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{
              color: 'common.white',
              opacity: 0.8,
            }}
          >
            {post.Summary}
          </Typography>
        </Box>
        <Box marginTop={4}>
          <Typography variant="body1" sx={{ color: 'common.white' }}>
            {new Date(post.publishedAt).toLocaleDateString()} 
            {post.categories?.length > 0 && (
              <span> · {post.categories.map(cat => cat.Name).join(', ')}</span>
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

Hero.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Hero;

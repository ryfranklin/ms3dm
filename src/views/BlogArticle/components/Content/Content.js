/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import config from '../../../../config/environment';

const getListComponent = (format) => format === 'ordered' ? 'ol' : 'ul';

const renderContent = (content) => {
  if (!Array.isArray(content)) return null;

  return content.map((block, index) => {
    switch (block.type) {
      case 'heading':
        return (
          <Typography
            key={index}
            variant={block.level === 2 ? 'h4' : 'h5'}
            gutterBottom
            sx={{ mt: index > 0 ? 4 : 0 }}
          >
            {block.children[0].text}
          </Typography>
        );
      case 'paragraph':
        return (
          <Typography
            key={index}
            variant="body1"
            color="text.secondary"
            paragraph
          >
            {block.children[0].text}
          </Typography>
        );
      case 'list': {
        const ListComponent = getListComponent(block.format);
        return (
          <Box component={ListComponent} key={index} sx={{ pl: 4, mb: 2 }}>
            {block.children.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Typography color="text.secondary">
                  {item.children[0].text}
                </Typography>
              </li>
            ))}
          </Box>
        );
      }
      default:
        return null;
    }
  });
};

const Content = ({ post }) => {
  const theme = useTheme();

  if (!post) return null;

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant="h3" gutterBottom>
          {post.Title}
        </Typography>
        {post.Summary && (
          <Typography
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
          >
            {post.Summary}
          </Typography>
        )}
        <Box marginY={4}>
          {post.FeaturedImage?.data?.attributes?.url && (
            <Box
              component="img"
              src={`${config.strapiURL}${post.FeaturedImage.data.attributes.url}`}
              alt={post.Title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          )}
        </Box>
        <Box>
          {renderContent(post.Content)}
        </Box>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingY={4}>
        <Divider />
        <Box marginTop={4}>
          <Typography variant="subtitle1" color="text.secondary">
            Published on {new Date(post.publishedAt).toLocaleDateString()}
          </Typography>
          {post.categories?.length > 0 && (
            <Box marginTop={2}>
              <Typography variant="subtitle1" color="text.secondary">
                Categories: {post.categories.map(cat => cat.Name).join(', ')}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

Content.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Content;

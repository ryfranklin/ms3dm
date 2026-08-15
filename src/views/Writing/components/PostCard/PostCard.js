import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/*
 * A single Substack post, rendered as a Homebase card that links out to the
 * canonical post on Substack. Shared by the Writing grid, the featured lead
 * card, and the Home "Latest writing" strip.
 */
const PostCard = ({ post, featured = false }) => {
  const meta = [post.dateDisplay, post.readingMins ? `${post.readingMins} min read` : null]
    .filter(Boolean)
    .join(' · ');

  return (
    <Card
      component="a"
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read on Substack: ${post.title}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: featured ? { xs: 'column', md: 'row' } : 'column',
        textDecoration: 'none',
        overflow: 'hidden',
      }}
    >
      {post.image && (
        <Box
          sx={{
            position: 'relative',
            flexShrink: 0,
            width: featured ? { xs: '100%', md: '46%' } : '100%',
            // Graceful, consistent ratio.
            aspectRatio: featured ? { xs: '16 / 9', md: 'auto' } : '16 / 9',
            minHeight: featured ? { md: 260 } : 'auto',
            borderBottom: featured ? 'none' : '1px solid var(--border)',
            borderRight: featured ? { md: '1px solid var(--border)' } : 'none',
            backgroundColor: 'var(--bg-soft)',
          }}
        >
          <Box
            component="img"
            src={post.image}
            alt=""
            loading="lazy"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      )}

      <CardContent
        sx={{
          padding: featured ? { xs: 3, md: 4 } : 3,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <Typography
          component="p"
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.06em',
            color: 'text.disabled',
            marginBottom: 1.5,
          }}
        >
          {meta}
        </Typography>

        <Typography
          variant={featured ? 'h5' : 'h6'}
          component="h3"
          color="text.primary"
          sx={{ fontWeight: 600, marginBottom: 1.5, lineHeight: 1.25 }}
        >
          {post.title}
        </Typography>

        {post.summary && (
          <Typography color="text.secondary" sx={{ lineHeight: 1.6, marginBottom: 3 }}>
            {post.summary}
          </Typography>
        )}

        <Typography
          component="span"
          sx={{
            marginTop: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'text.primary',
          }}
        >
          Read on Substack →
        </Typography>
      </CardContent>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.string,
    dateDisplay: PropTypes.string,
    readingMins: PropTypes.number,
  }).isRequired,
  featured: PropTypes.bool,
};

export default PostCard;

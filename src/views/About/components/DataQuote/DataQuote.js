import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';

const DataQuote = () => {

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        paddingY: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 800,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: 'white',
              marginBottom: 3,
              fontStyle: 'italic',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            &quot;Data is the new oil.&quot;
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500,
              marginBottom: 4,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            - Clive Humby
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.8,
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            In today&apos;s digital age, data has become one of the most valuable assets for any organization. Like oil, raw data must be refined and processed to unlock its true potential. At ms3dm.tech, we specialize in transforming complex 3D data into actionable insights that drive business decisions and innovation.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DataQuote;

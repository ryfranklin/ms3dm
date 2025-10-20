import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import dataCity from '../../../../assets/img/datacity_original.jpeg';

const Hero = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 80, sm: 90, md: 100 }}
      display={'flex'}
      alignItems={'center'}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage: `url(${dataCity})`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: 'rgba(255, 255, 255, 0.95)',
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 500,
            margin: '0 auto',
            padding: { xs: 1.5, md: 2 },
            background: 'white',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#2d3748',
              textTransform: 'uppercase',
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              letterSpacing: '0.05em',
              marginBottom: 0.5,
            }}
          >
            About us
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              color: '#2d3748',
              lineHeight: 1.4,
              fontWeight: 400,
              fontSize: { xs: '0.8rem', md: '0.9rem' },
              textAlign: 'center',
              maxWidth: 400,
              margin: '0 auto',
            }}
          >
            We are a team of data architects and software engineers who design 
            and build data platforms that empower your business to 
            make data-driven decisions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero, Solutions, ProofSection, CaseStudies, AboutSection, CallToAction } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <Main>
      <Container
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '20%',
            zIndex: 1,
            top: 0,
            left: 0,
            height: '100%',
            backgroundSize: '18px 18px',
            backgroundImage: `radial-gradient(${alpha(
              theme.palette.primary.dark,
              0.4,
            )} 20%, transparent 20%)`,
            opacity: 0.2,
          },
        }}
      >
        <Box position={'relative'} zIndex={2}>
          <Hero />
        </Box>
      </Container>
      
      <Container>
        <Solutions />
      </Container>
      
      <ProofSection />
      
      <Container>
        <CaseStudies />
      </Container>
      
      <AboutSection />
      
      <Container>
        <CallToAction />
      </Container>
    </Main>
  );
};

export default Home;

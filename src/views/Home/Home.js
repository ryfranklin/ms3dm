import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Solutions,
  ProofSection,
  CaseStudies,
  LatestWriting,
  AboutSection,
  CallToAction,
} from './components';

const Home = () => {
  return (
    <Main>
      <Container>
        <Hero />
      </Container>

      <Container paddingTop={'0 !important'}>
        <Solutions />
      </Container>

      {/* Full-bleed capabilities / stack strip. */}
      <ProofSection />

      <Container>
        <CaseStudies />
      </Container>

      {/* Full-bleed latest-writing strip (Substack). Renders nothing if empty. */}
      <LatestWriting />

      {/* Full-bleed practice band. */}
      <AboutSection />

      <Container>
        <Box>
          <CallToAction />
        </Box>
      </Container>
    </Main>
  );
};

export default Home;

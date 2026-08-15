import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero, WhatItIs, Architecture, TechStack, Collaborate } from './components';

/*
 * Homebase showcase page. Presents Homebase as a flagship engineering project:
 * technical summary, architecture diagrams fetched live from the source repo,
 * the tech stack, and an invitation to collaborate. Full Homebase aesthetic,
 * inherited from the theme and homebase.css.
 */
const Homebase = () => {
  return (
    <Main>
      <Container>
        <Hero />
      </Container>

      <Container paddingTop={'0 !important'}>
        <WhatItIs />
      </Container>

      {/* Full-bleed, live-fetched architecture diagrams. Anchor for the hero link. */}
      <Box id="architecture">
        <Architecture />
      </Box>

      {/* Full-bleed tech-stack strip. */}
      <TechStack />

      <Container>
        <Collaborate />
      </Container>
    </Main>
  );
};

export default Homebase;

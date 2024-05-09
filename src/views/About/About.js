import React from 'react';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Contact,
  Hero,
  Story,
} from './components';

const About = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <Story />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Contact />
    </Main>
  );
};

export default About;

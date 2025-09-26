import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Features, Services } from './components';

const PortfolioPage = () => (
  <Main colorInvert={true}>
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Services />
      </Container>
    </Box>
    <Box bgcolor={'primary.main'}>
      <Container>
        <Features />
      </Container>
    </Box>
  </Main>
);

export default PortfolioPage;

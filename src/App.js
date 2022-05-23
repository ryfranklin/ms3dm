import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

const App = () => {
  return (
    <Page>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Page>
  );
};

export default App;

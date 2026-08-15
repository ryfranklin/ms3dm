import React from 'react';

import {
  Home as HomeView,
  Homebase as HomebaseView,
  Writing as CompendiumView,
  ContactPage as ContactPageView,
  WebBasic as WebBasicView,
  About as AboutView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SignupSimple as SignupSimpleView,
  NotFound as NotFoundView,
  PortfolioPage as PortfolioPageView,
  PortfolioGrid as PortfolioGridView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/homebase',
    renderer: (params = {}) => <HomebaseView {...params} />,
  },
  {
    path: '/compendium',
    renderer: (params = {}) => <CompendiumView {...params} />,
  },
  {
    path: '/contact-page',
    renderer: (params = {}) => <ContactPageView {...params} />,
  },
  {
    path: '/web-basic',
    renderer: (params = {}) => <WebBasicView {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <AboutView {...params} />,
  },
  {
    path: '/portfolio-page',
    renderer: (params = {}) => <PortfolioPageView {...params} />,
  },
  {
    path: '/portfolio-grid',
    renderer: (params = {}) => <PortfolioGridView {...params} />,
  },
  {
    path: '/password-reset-simple',
    renderer: (params = {}) => <PasswordResetSimpleView {...params} />,
  },
  {
    path: '/signin-simple',
    renderer: (params = {}) => <SigninSimpleView {...params} />,
  },
  {
    path: '/signup-simple',
    renderer: (params = {}) => <SignupSimpleView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
];

export default routes;

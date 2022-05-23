import React from 'react';

import {
  IndexView,
  Home as HomeView,
  Faq as FaqView,
  ContactPage as ContactPageView,
  WebBasic as WebBasicView,
  About as AboutView,
  PortfolioPage as PortfolioPageView,
  PortfolioGrid as PortfolioGridView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  AboutSideCover as AboutSideCoverView,
  BlogSearch as BlogSearchView,
  BlogNewsroom as BlogNewsroomView,
  BlogArticle as BlogArticleView,
  BlogReachView as BlogReachViewView,
  PasswordResetCover as PasswordResetCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SigninCover as SigninCoverView,
  SignupSimple as SignupSimpleView,
  SignupCover as SignupCoverView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/faq',
    renderer: (params = {}) => <FaqView {...params} />,
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
    path: '/portfolio-page',
    renderer: (params = {}) => <PortfolioPageView {...params} />,
  },
  {
    path: '/portfolio-grid',
    renderer: (params = {}) => <PortfolioGridView {...params} />,
  },
  {
    path: '/contact-sidebar-map',
    renderer: (params = {}) => <ContactPageSidebarMapView {...params} />,
  },
  {
    path: '/contact-page-cover',
    renderer: (params = {}) => <ContactPageCoverView {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <AboutView {...params} />,
  },
  {
    path: '/about-side-cover',
    renderer: (params = {}) => <AboutSideCoverView {...params} />,
  },
  {
    path: '/blog-search',
    renderer: (params = {}) => <BlogSearchView {...params} />,
  },
  {
    path: '/blog-newsroom',
    renderer: (params = {}) => <BlogNewsroomView {...params} />,
  },
  {
    path: '/blog-article',
    renderer: (params = {}) => <BlogArticleView {...params} />,
  },
  {
    path: '/blog-reach-view',
    renderer: (params = {}) => <BlogReachViewView {...params} />,
  },
  {
    path: '/password-reset-cover',
    renderer: (params = {}) => <PasswordResetCoverView {...params} />,
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
    path: '/signin-cover',
    renderer: (params = {}) => <SigninCoverView {...params} />,
  },
  {
    path: '/signup-simple',
    renderer: (params = {}) => <SignupSimpleView {...params} />,
  },
  {
    path: '/signup-cover',
    renderer: (params = {}) => <SignupCoverView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;

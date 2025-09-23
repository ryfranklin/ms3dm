import React from 'react';

import {
  IndexView,
  ContactPage as ContactPageView,
  WebBasic as WebBasicView,
  About as AboutView,
  BlogNewsroom as BlogNewsroomView,
  BlogArticle as BlogArticleView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SignupSimple as SignupSimpleView,
  NotFound as NotFoundView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <IndexView {...params} />,
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
    path: '/blog',
    renderer: (params = {}) => <BlogNewsroomView {...params} />,
  },
  {
    path: '/blog-newsroom',
    renderer: (params = {}) => <BlogNewsroomView {...params} />,
  },
  {
    path: '/blog/:slug',
    renderer: (params = {}) => <BlogArticleView {...params} />,
  },
  {
    path: '/blog-article/:slug',
    renderer: (params = {}) => <BlogArticleView {...params} />,
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

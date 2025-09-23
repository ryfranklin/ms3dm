const environment = {
  development: {
    strapiURL: 'http://localhost:1337',
  },
  production: {
    strapiURL: window?.env?.REACT_APP_STRAPI_URL || 'https://your-strapi-production-url.com',
  },
};

const config = environment[window?.env?.NODE_ENV || 'development'];

export default config; 
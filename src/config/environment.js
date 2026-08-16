const environment = {
  development: {
    strapiURL: 'http://localhost:1337',
    // Contact endpoint (Lambda Function URL). Empty by default so local dev
    // falls back to a mailto: compose instead of hitting a real backend.
    contactEndpoint: window?.env?.REACT_APP_CONTACT_ENDPOINT || '',
  },
  production: {
    strapiURL: window?.env?.REACT_APP_STRAPI_URL || 'https://your-strapi-production-url.com',
    contactEndpoint: window?.env?.REACT_APP_CONTACT_ENDPOINT || '',
  },
};

const config = environment[window?.env?.NODE_ENV || 'development'];

export default config;

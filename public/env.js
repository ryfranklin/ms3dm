window.env = {
  NODE_ENV: 'development',
  REACT_APP_STRAPI_URL: 'http://localhost:1337',
  // Contact form endpoint (Lambda Function URL from infra/contact). Leave blank
  // to fall back to a mailto: compose. Set after `terraform apply`.
  REACT_APP_CONTACT_ENDPOINT: ''
};

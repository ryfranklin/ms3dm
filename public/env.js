window.env = {
  NODE_ENV: 'development',
  REACT_APP_STRAPI_URL: 'http://localhost:1337',
  // Contact form endpoint (Lambda Function URL, provisioned by the
  // ms3dm-web-infra contact stack). Leave blank to fall back to a mailto:
  // compose. Set to the terraform output function_url value.
  REACT_APP_CONTACT_ENDPOINT: ''
};

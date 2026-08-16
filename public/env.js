window.env = {
  NODE_ENV: 'development',
  REACT_APP_STRAPI_URL: 'http://localhost:1337',
  // Contact form endpoint (Lambda Function URL, provisioned by the
  // ms3dm-web-infra contact stack). Public by design (called from the browser).
  // Blank falls back to a mailto: compose.
  REACT_APP_CONTACT_ENDPOINT: 'https://fe77czcdfbmgtjcfexctnpugeq0mjppr.lambda-url.us-east-1.on.aws/'
};

export default {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Time Tracker',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  host: 'localhost:8081',
  basePath: '/',
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  schemes: [
    'http',
  ],
  consumes: [
    'application/json',
  ],
  produces: [
    'application/json',
  ],
  security: [{
    Bearer: [],
  }],
};
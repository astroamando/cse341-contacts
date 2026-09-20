const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API documentation for the CSE 341 Contacts Project'
  },

  host: process.env.RENDER_EXTERNAL_HOSTNAME || 'localhost:8080',
  schemes: process.env.RENDER_EXTERNAL_HOSTNAME ? ['https'] : ['http']
};

const outputFile = './swagger.json';

const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API documentation for the CSE 341 Contacts Project'
  },

  host: 'cse341-contacts-1-vmo7.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';

const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
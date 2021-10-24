require('marko/node-require').install();
require('marko/express');

const app = require('express')();
const rotas = require('../app/routes/route.js')(app);

module.exports = app;

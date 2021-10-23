const app = require('express')();
const rotas = require('../app/routes/rotas.js')(app);

module.exports = app;

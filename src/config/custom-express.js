require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/static', express.static('src/app/public/js'));

app.use(bodyParser.urlencoded({extended: true}));

const rotas = require('../app/routes/route.js')(app);

module.exports = app;

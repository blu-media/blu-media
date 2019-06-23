/* NPM Installation Dependencies */
const express = require('express');
const bodyParser = require('body-parser');

/* Server Initialization */
const app = express();
const server = require('http').Server(app);

/* Router Configuration */
const router = require('./routes/router');
app.use('/', router);

/* Middleware Functionality */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

var port = process.env.PORT || 8080;

server.listen(port, function () {
  console.log('Server running at http://127.0.0.1:8080/');
});

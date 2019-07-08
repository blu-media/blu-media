/* NPM Installation Dependencies */
const express = require('express');
const bodyParser = require('body-parser');

/* Server Initialization */
const app = express();
const server = require('http').Server(app);

/* Middleware Functionality */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

/* Router Configuration */
const router = require('./routes/router');
app.use('/', router);

var port = process.env.PORT || 8080;

server.listen(port, function () {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

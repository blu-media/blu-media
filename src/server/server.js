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
const mainRouter = require('./routes/routers/router');
const userRouter = require('./routes/routers/userRouter');
const organizationRouter = require('./routes/routers/organizationRouter');
const eventRouter = require('./routes/routers/eventRouter');

app.use('/', mainRouter);
app.use('/events', eventRouter);
app.use('/organizations', organizationRouter);
app.use('/users', userRouter);

const port = process.env.PORT || 8080;

server.listen(port, function () {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

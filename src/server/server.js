/* NPM Installation Dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4')
const session = require('express-session')

/* Server Initialization */
const app = express();
const server = require('http').Server(app);

const config = require('../../config').getConfig(process.env.NODE_ENV);

/* Middleware Functionality */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(session({
  genid: (request) => {
    return uuid() // use UUIDs for session IDs
  },
  secret: `${config.session.SESSION_SECRET}`,
  resave: false,
  saveUninitialized: true
}))

/* Router Configuration */
const mainRouter = require('./routes/routers/router');
const userRouter = require('./routes/routers/userRouter');
const organizationRouter = require('./routes/routers/organizationRouter');
const eventRouter = require('./routes/routers/eventRouter');
const authRouter = require('./routes/routers/authRouter');

app.use('/', mainRouter);
app.use('/events', eventRouter);
app.use('/organizations', organizationRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter)

const port = process.env.PORT || 8080;

server.listen(port, function () {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

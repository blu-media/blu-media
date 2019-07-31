/* NPM Installation Dependencies */
const express = require("express");
const passport = require('passport');
var GoogleTokenStrategy = require('passport-google-token').Strategy;
var gCal = require('google-calendar');
const path = require("path");
const cors = require("cors");

// Import environment variables.
require('dotenv').config({ path: path.join(__dirname + '/../../../../.env') });

// Import authentication util.
const { generateToken, sendToken, findOrCreateUser } = require('../util/authUtil');

const router = express.Router();

var corsOption = {
  credentials: true,
  exposedHeaders: ['X-Auth-Token'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  origin: true
};

router.use(cors(corsOption));

/********** GOOGLE AUTHENTICATION **********/

router.route('/google')
  .post(passport.authenticate('google-token'), (request, response, next) => {
    if (!request.user) {
      return response.send(401, 'User Not Authenticated');
    }

    request.auth = {
      id: request.user.id
    };

    next();
  }, generateToken, sendToken);

router.route('/sign-in')
  .post((request, response) => {
    findOrCreateUser(request.body.profile);

    // Going to need to add token to the express session.
  });

passport.use(new GoogleTokenStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET
}, (accessToken, refreshToken, profile, done) => {
  profile = profile._json
}));

module.exports = router;

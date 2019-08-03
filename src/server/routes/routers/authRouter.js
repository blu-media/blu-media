/* NPM Installation Dependencies */
const express = require("express");
const passport = require('passport');
var GoogleTokenStrategy = require('passport-google-token').Strategy;
var gCal = require('google-calendar');
const path = require("path");
const cors = require("cors");

/* Environment Configuration */
const config = require('../../../../config').getConfig(process.env.NODE_ENV);

// Import authentication util.
const { generateToken, sendToken, findOrCreateUser } = require('../util/authUtil');

const router = express.Router();

var corsOption = {
  credentials: true,
  exposedHeaders: ['x-auth-token'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  origin: true
};

router.use(cors(corsOption));

/********** GOOGLE AUTHENTICATION **********/

// Need to add the following line soon:
// passport.authenticate('google-token')
router.route('/google')
  .post(async (request, response, next) => {
    let profile = request.body.profile;
    let user = await findOrCreateUser(profile);

    request.user = user;

    next();
  }, generateToken, sendToken);

// passport.use(new GoogleTokenStrategy({
//   clientID: config.googleAuth.GOOGLE_CLIENT_ID,
//   clientSecret: config.googleAuth.GOOGLE_CLIENT_SECRET
// }, (accessToken, refreshToken, profile, done) => {
//   findOrCreateUser(profile._json, (error, user) => {
//     return done(error, user);
//   });
// }));

module.exports = router;

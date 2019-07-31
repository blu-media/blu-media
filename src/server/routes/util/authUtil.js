/* NPM Installation Dependencies */
const uniqid = require("uniqid");

/* Import DB Object */
const { db } = require('../../db/connection');

const findOrCreateUser = (profile) => {
  db.users.findOne({ where: { email: profile.email } })
    .then((user) => {
      if (user) return;
      else {
        db.users.create({
          email: profile.email,
          firstName: profile.given_name,
          id: uniqid(),
          lastName: profile.family_name,
          profilePicture: profile.picture
        });
      }
    });
}

const generateToken = (request, response, next) => {
  const token = jwt.sign(
    { id: request.auth.id },
    'my-secret',
    { expiresIn: 60 * 120 }
  );

  request.token = token;

  return next();
}

const sendToken = (request, response) => {
  response.setHeader('X-Auth-Token', request.token);
  return response.status(200).send(JSON.stringify(request.user));
}

module.exports = {
  findOrCreateUser,
  generateToken,
  sendToken
}

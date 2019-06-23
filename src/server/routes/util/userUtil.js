/* DB Models */
const { User } = require('../../db/connection');

var getAllUsers = (request, response) => {
  User.findAll()
    .then((users) => {
      response.json(users);
    });
}

var createUser = (request, response) => {
  User.create(request.body)
    .then((user) => {
      response.json(user);
    })
    .catch((error) => {
      console.log(error)
    });
}

module.exports = {
  createUser,
  getAllUsers
}

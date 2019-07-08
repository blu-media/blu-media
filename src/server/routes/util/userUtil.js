/* DB Models */
const { db } = require('../../db/connection');

var getAllUsers = (request, response) => {
  db.users.findAll({
    include: [
      {
        model: db.organizations
      }
    ]
  })
    .then((users) => {
      response.json(users);
    });
}

var createUser = (request, response) => {
  db.users.create(request.body)
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

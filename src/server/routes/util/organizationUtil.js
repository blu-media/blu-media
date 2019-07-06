/* DB Models */
const { db } = require('../../db/connection');

var createOrganization = (request, response) => {
  db.organizations.create(request.body)
    .then((org) => {
      response.json(org);
    })
    .catch((error) => {
      console.log(error)
    });
}

var getOrganizations = (request, response) => {
  db.organizations.findAll({
    include: [
      {
        model: db.users
      }
    ]
  })
    .then((orgs) => {
      response.json(orgs);
    })
    .catch((error) => {
      console.log(error)
    });
}

var addOrganizationUser = (request, response) => {
  db.organizations.findByPk(request.body.orgId)
    .then((org) => {
      db.users.findByPk(request.body.userId).then((user) => {
        org.addUser(user).then((org) => {
          response.send(org);
        });
      });
    })
};

var getOrganizationEvents = (request, response) => {
}


module.exports = {
  addOrganizationUser,
  createOrganization,
  getOrganizations,
  getOrganizationEvents
}

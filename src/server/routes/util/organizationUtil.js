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
        model: db.users,
        as: 'members'
      },
      {
        model: db.events
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

var addOrganizationMember = (request, response) => {
  db.organizations.findByPk(request.body.orgId)
    .then((org) => {
      console.log(org);
      db.users.findByPk(request.body.userId).then((user) => {
        org.addMember(user).then((org) => {
          response.send(org);
        });
      });
    })
};

var getOrganizationEvents = (request, response) => {
}


module.exports = {
  addOrganizationMember,
  createOrganization,
  getOrganizations,
  getOrganizationEvents
}

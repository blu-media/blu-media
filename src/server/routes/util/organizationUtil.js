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
  db.organizations.findAll()
    .then((orgs) => {
      response.json(orgs);
    })
    .catch((error) => {
      console.log(error)
    });
}

var getOrganizationEvents = (request, response) => {
}


module.exports = {
  createOrganization,
  getOrganizations,
  getOrganizationEvents
}

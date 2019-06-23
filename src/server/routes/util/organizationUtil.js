/* DB Models */
const { Organization } = require('../../db/connection');

var createOrganization = (request, response) => {
  Organization.create(request.body)
    .then((org) => {
      response.json(org);
    })
    .catch((error) => {
      console.log(error)
    });
}

var getOrganizations = (request, response) => {
  Organization.findAll()
    .then((orgs) => {
      response.json(orgs);
    })
    .catch((error) => {
      console.log(error)
    });
}

module.exports = {
  createOrganization,
  getOrganizations
}

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

var deleteOrganization = (request, response) => {
  db.organizations.destroy({
    where: { "id": request.params.orgId }
  }).then(() => {
    response.send("Organization has been deleted!");
  })
};

var editOrganizationAttribute = (request, response) => {
  db.organizations.update(
    {
      "name": request.body.name,
      "logo": request.body.logo,
      "contactInfo": request.body.contactInfo,
      "acronym": request.body.acronym,
      "about": request.body.about
    }, {
      where: { "id": request.params.orgId }
    }).then((org) => {
      response.send(org);
    })
};

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
      db.users.findByPk(request.body.userId).then((user) => {
        org.addMember(user, {
          through: {
            position: request.body.position
          }
        }).then((org) => {
          response.send(org);
        });
      });
    })
};

module.exports = {
  addOrganizationMember,
  createOrganization,
  getOrganizations,
  deleteOrganization,
  editOrganizationAttribute
}

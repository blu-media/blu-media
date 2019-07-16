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
    where: {"id": request.body.orgId}
  }).then(() => {
    response.send("Organization has been deleted!");
  })
};

var editOragnizationAttribute = (request, response) => {
    db.organizations.update(
      { "name": request.body.namee,
        "logo": request.body.logoo,
        "contactInfo": request.body.contactInfoo,
        "acronym": request.body.acronymm,
        "about": request.body.aboutt} , { where: {"id": request.body.orgId}
      }).then(() => {
      response.send("Organization has been updated!");
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
  editOragnizationAttribute
}

/* DB Models */
const { db } = require('../../db/connection');

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
    });
};

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
    where: { id: request.params.orgId }
  }).then(() => {
    response.send("Organization has been deleted!");
  });
};

var getEventsByOrganization = (request, response) => {
  db.organizations.findByPk(request.params.orgId, {
    include: [
      {
        model: db.users,
        as: 'members'
      },
      {
        model: db.events
      }
    ]
  }).then((org) => {
    response.json(org.events);
  }).catch((error) => {
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

var updateOrganization = (request, response) => {
  db.organizations.update(request.body, {
    where: { id: request.params.orgId }
  }).then((org) => {
    response.send(org);
  });
};

module.exports = {
  addOrganizationMember,
  createOrganization,
  deleteOrganization,
  getEventsByOrganization,
  getOrganizations,
  updateOrganization
}

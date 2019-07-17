/* NPM Installation Dependencies */
const qr = require("qrcode");

/* DB Object */
const { db } = require("../../db/connection");

const addAttendee = (request, response) => {
  db.events.findByPk(request.params.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
      event.addAttendee(user).then(attendee => {
        response.send(attendee);
      });
    });
  });
};

const addOrganizationToEvent = (request, response) => {
  db.events.findByPk(request.params.eventId).then(event => {
    db.organizations.findByPk(request.body.orgId).then(org => {
      event.addOrganization(org).then(org => {
        response.send(org);
      });
    });
  });
};

const addRSVP = (request, response) => {
  db.events.findByPk(request.params.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
      event.addRsvp(user, {
        through: {
          response: request.body.response
        }
      }).then(rsvp => {
        response.send(rsvp);
      });
    });
  });
};

const createQRCode = (eventId) => {
  return new Promise((resolve, reject) => {
    qr.toDataURL(`localhost:8080/events/${eventId}`, (error, url) => {
      if (error) reject(error);

      resolve(url);
    });
  });
};

const deleteAttendee = (request, response) => {
  db.events.findByPk(request.params.eventId).then(event => {
    db.users.findByPk(request.params.userId).then(user => {
      event.removeAttendee(user).then(() => {
        response.send(
          `Removed attendee with ID ${user.id} from event with ID ${event.id}!`
        );
      });
    });
  });
};

const deleteOrganizationFromEvent = (request, response) => {
  db.events.findByPk(request.params.eventId).then(event => {
    db.organizations.findByPk(request.params.orgId).then(org => {
      event.removeOrganization(org).then(() => {
        response.send("Organization has been removed from event!");
      });
    });
  });
};

const deleteRSVP = (request, response) => {
  db.events.findByPk(request.params.eventId).then(event => {
    db.users.findByPk(request.params.userId).then(user => {
      event.removeRsvp(user).then(() => {
        response.send("RSVP has been removed from event!");
      });
    });
  });
};

const getAllEvents = (request, response) => {
  db.events.findAll({
    include: [
      {
        model: db.users,
        as: "rsvps"
      },
      {
        model: db.users,
        as: "attendees"
      },
      {
        model: db.organizations
      }
    ]
  })
    .then(events => {
      response.json(events);
    });
};

const getAttendees = (request, response) => {
  db.events.findByPk(request.params.eventId, {
    include: [
      {
        model: db.users,
        as: "attendees"
      }
    ]
  })
    .then((event) => {
      response.send(event.attendees);
    });
};

const getEventById = (request, response) => {
  db.events.findByPk(request.params.eventId, {
    include: [
      {
        model: db.users,
        as: "rsvps"
      },
      {
        model: db.users,
        as: "attendees"
      },
      {
        model: db.organizations
      }
    ]
  })
    .then(event => {
      response.json(event);
    });
};

const getRSVP = (request, response) => {
  db.eventRSVPs.findAll({
    where: {
      eventId: request.params.eventId,
      userId: request.params.userId
    }
  })
    .then(rsvp => {
      response.send(rsvp);
    });
};

const updateRSVP = (request, response) => {
  db.eventRSVPs.update(
    {
      response: request.body.response
    },
    {
      where: {
        eventId: request.params.eventId,
        userId: request.body.userId
      }
    }
  )
    .then(RSVP => {
      response.send(RSVP);
    });
};

module.exports = {
  addAttendee,
  addOrganizationToEvent,
  addRSVP,
  createQRCode,
  deleteAttendee,
  deleteOrganizationFromEvent,
  deleteRSVP,
  getAllEvents,
  getAttendees,
  getEventById,
  getRSVP,
  updateRSVP
};

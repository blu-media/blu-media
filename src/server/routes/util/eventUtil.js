const qr = require('qrcode');

/* DB Models */
const { db } = require("../../db/connection");

var getEvent = (request, response) => {
  db.events.findAll({ eventId: request.params.eventId })
    .then(event => {
      response.json(event);
    });
};

var getAllEvents = (request, response) => {
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

var addAttendee = (request, response) => {
  db.events.findByPk(request.body.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
      event.addAttendee(user).then(event => {
        response.send(event);
      });
    });
  });
};

var deleteAttendee = (request, response) => {
  db.events.findByPk(request.params.eventId).then(event => {
    db.users.findByPk(request.params.userId).then(user => {
      event.removeAttendee(user).then(() => {
        response.send(
          `Removed attendee with ID ${user.id} from event with ID ${event.id}`
        );
      });
    });
  });
};

var getAttendees = (request, response) => {
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

var addRSVP = (request, response) => {
  db.events.findByPk(request.body.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
      event
        .addRsvp(user, {
          through: {
            response: request.body.response
          }
        })
        .then(event => {
          response.send(event);
        });
    });
  });
};

var deleteRSVP = (request, response) => {
  db.events.findByPk(request.params.eventId).then(event => {
    db.users.findByPk(request.params.userId).then(user => {
      event.removeRsvp(user).then(() => {
        response.send("RSVP has been removed from event!");
      });
    });
  });
};

var getRSVP = (request, response) => {
  db.eventRSVPs
    .findAll({
      where: {
        eventId: request.body.eventId,
        userId: request.body.userId
      }
    })
    .then(eventRSVPs => {
      response.send(eventRSVPs);
    });
};

var updateResponse = (request, response) => {
  db.eventRSVPs.update({
    response: request.body.response
  }, {
      where: {
        eventId: request.body.eventId,
        userId: request.body.userId
      }
    }).then((RSVP) => {
      response.send(RSVP);
    });
};

var addOrganization = (request, response) => {
  db.events.findByPk(request.body.eventId).then(event => {
    db.organizations.findByPk(request.body.orgId).then(org => {
      event.addOrganization(org)
        .then(org => {
          response.send(org);
        });
    });
  });
};

var createQRCode = (eventId) => {
  return new Promise((resolve, reject) => {
    qr.toDataURL(`localhost:8080/events/${eventId}`, (error, url) => {
      if (error) reject(error);

      resolve(url);
    })
  });
}

module.exports = {
  addRSVP,
  addOrganization,
  createQRCode,
  getRSVP,
  getEvent,
  getAllEvents,
  addAttendee,
  deleteRSVP,
  deleteAttendee,
  getAttendees,
  updateResponse
};

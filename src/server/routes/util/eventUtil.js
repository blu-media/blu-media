/* DB Models */
const { db } = require("../../db/connection");

var getEvent = (request, response) => {
  db.events.findAll({ eventId: request.params.eventId }).then(event => {
    response.json(event);
  });
};

var getAllEvents = (request, response) => {
  db.events
    .findAll({
      include: [
        {
          model: db.users,
          as: "rsvps"
        },
        {
          model: db.users,
          as: "attendees"
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
  db.events.findByPk(request.body.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
      event.removeAttendee(user).then(() => {
        response.send(
          `Removed attendee with ID ${user.id} from event with ID ${event.id}`
        );
      });
    });
  });
};

var getAttendee = (request, response) => {
  db.eventAttendees
    .findAll({
      where: {
        eventId: request.body.eventId,
        userId: request.body.userId
      }
    })
    .then(eventAttendees => {
      response.send(eventAttendees);
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
  db.events.findByPk(request.body.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
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
  db.events.findByPk(request.body.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
      event.getRsvp(user).then(rsvp => {
        rsvp
          .setRsvp({
            response: request.body.response
          })
          .then(event => {
            response.send(event);
          });
      });
    });
  });
};

module.exports = {
  addRSVP,
  getRSVP,
  getEvent,
  getAllEvents,
  addAttendee,
  deleteRSVP,
  deleteAttendee,
  getAttendee,
  updateResponse
};

/* DB Models */
const { db } = require("../../db/connection");

var getUpcomingEvents = (request, response) => {
  db.events.findAll().then(events => {
    response.json(events);
  });
};

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

var addEventRSVP = (request, response) => {
  db.events.findByPk(request.body.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
      event
        .addRsvp(user, {
          through: {
            response: "Going"
          }
        })
        .then(event => {
          response.send(event);
        });
    });
  });
};

var addEventAttendees = (request, response) => {
  db.events.findByPk(request.body.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
      event.addAttendee(user).then(event => {
        response.send(event);
      });
    });
  });
};

var deleteAttenedees = (request, response) => {
  db.events.findByPk(request.body.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
      event.removeAttendees([]).then(event => {
        response.send(event);
      });
    });
  });
};

var deleteRSVP = (request, response) => {
  db.events.findByPk(request.body.eventId).then(event => {
    db.users.findByPk(request.body.userId).then(user => {
      event.setRsvps([]).then(event => {
        response.send(event);
      });
    });
  });
};

module.exports = {
  addEventRSVP,
  getEvent,
  getAllEvents,
  getUpcomingEvents,
  addEventAttendees,
  deleteRSVP,
  deleteAttenedees
};

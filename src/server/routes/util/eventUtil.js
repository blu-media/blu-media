/* DB Models */
const { db } = require('../../db/connection');

var getUpcomingEvents = (request, response) => {
  db.events.findAll()
    .then((events) => {
      response.json(events);
    });
}

var getEvent = (request, response) => {
  db.events.findAll({ eventId: request.params.eventId })
    .then((event) => {
      response.json(event);
    });
}

var getAllEvents = (request, response) => {
  db.events.findAll()
    .then((events) => {
      response.json(events);
    });
}

module.exports = {
  getEvent,
  getAllEvents,
  getUpcomingEvents
}

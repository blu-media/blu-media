/* DB Models */
const { db } = require('../../db/connection');

var getUpcomingEvents = (request, response) => {
  db.events.findAll()
    .then((events) => {
      response.json(events);
    });
}

var getEvent = (request, response) => {
  var eventID = request.params.eventID;
  db.events.findAll({ eventId: eventID })
    .then((evennt) => {
      response.json(event);
    });
}

module.exports = {
  getEvent,
  getUpcomingEvents
}

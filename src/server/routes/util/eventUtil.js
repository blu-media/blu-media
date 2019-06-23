/* DB Models */
const { Event } = require('../../db/connection');

var getUpcomingEvents = (request, response) => {
  Event.findAll()
    .then((events) => {
      response.json(events);
    });
}

module.exports = {
  getUpcomingEvents
}

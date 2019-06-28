/* DB Models */
const { db } = require('../../db/connection');

var getUpcomingEvents = (request, response) => {
  db.events.findAll()
    .then((events) => {
      response.json(events);
    });
}

module.exports = {
  getUpcomingEvents
}

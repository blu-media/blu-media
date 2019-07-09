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
  db.events.findAll({
    include: [
      {
        model: db.users,
        as: 'rsvps'
      }
    ]
  })
    .then((events) => {
      response.json(events);
    });
}

var addEventRSVP = (request, response) => {
  db.events.findByPk(request.body.eventId)
    .then((event) => {
      db.users.findOne({
        where: { id: request.body.userId },
        attributes: ['id', 'firstName', 'lastName', 'profilePicture']
      })
        .then((user) => {
          console.log(user.toJSON());
          event.addRsvp(user, {
            through: {
              response: 'Going'
            }
          })
            .then(event => {
              response.send(event);
            })
        })
    })
}

module.exports = {
  addEventRSVP,
  getEvent,
  getAllEvents,
  getUpcomingEvents
}

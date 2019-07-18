/**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 * @package
 */

/* NPM Installation Dependencies */
const qr = require("qrcode");

/* DB Object */
const { db } = require("../../db/connection");

/* Common Utility Functions */
const util = require("./commonUtil");

/**
 * 
 * @param {*} request 
 * @param {*} response 
 */
const addAttendee = async (request, response) => {
  let event = await util.getEventById(request.params.eventId);
  let user = await util.getUserById(request.body.userId);

  event.addAttendee(user).then((attendee) => {
    response.json(attendee);
  });
};

const addOrganizationToEvent = async (request, response) => {
  let event = await util.getEventById(request.params.eventId);
  let org = await util.getOrganizationById(request.body.orgId);

  event.addOrganization(org).then((org) => {
    response.json(org);
  });
};

const addRSVP = async (request, response) => {
  let event = await util.getEventById(request.params.eventId);
  let user = await util.getUserById(request.body.userId);

  event.addRsvp(user, {
    through: {
      response: request.body.response
    }
  }).then((rsvp) => {
    response.json(rsvp);
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

const deleteAttendee = async (request, response) => {
  let event = await util.getEventById(request.params.eventId);
  let user = await util.getUserById(request.params.userId);

  event.removeAttendee(user).then(() => {
    response.send("Attendee has been removed from event!");
  });
};

const deleteOrganizationFromEvent = async (request, response) => {
  let event = await util.getEventById(request.params.eventId);
  let org = await util.getOrganizationById(request.params.orgId);

  event.removeOrganization(org).then(() => {
    response.send("Organization has been removed from event!");
  });
};

const deleteRSVP = async (request, response) => {
  let event = await util.getEventById(request.params.eventId);
  let user = await util.getUserById(request.params.userId);

  event.removeRsvp(user).then(() => {
    response.send("RSVP has been removed from event!");
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
  }).then(events => {
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

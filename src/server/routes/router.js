/* NPM Installation Dependencies */
const express = require('express');

/* DB Models */
const { User } = require('../db/connection');
const { Organization } = require('../db/connection');
const { Event } = require('../db/connection');

/* Utility Functions */
const { createUser, getAllUsers } =
  require('./util/userUtil');
const { getUpcomingEvents } =
  require('./util/eventUtil');
const { createOrganization, getOrganizations } =
  require('./util/organizationUtil');

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.get('/upcoming-events', getUpcomingEvents);
router.get('/organizations', getOrganizations);
router.post('/organizations', createOrganization);

// QUERY: Get an event's information by an Event ID number.

// QUERY: Get an event's information (including RSVP's) by an Event ID number.

// QUERY: Get all the events within a given timeframe.

// QUERY: Get all the events for a given organization.
// Separate into both upcoming and past events.

// QUERY: Get all of the e-Board members of a given organization.

module.exports = router;

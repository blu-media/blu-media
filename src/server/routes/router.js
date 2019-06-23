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

module.exports = router;

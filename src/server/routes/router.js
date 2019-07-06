/* NPM Installation Dependencies */
const express = require("express");

/* Utility Functions */
const { createUser, getAllUsers } =
  require("./util/userUtil");
const { getEvent, getUpcomingEvents } =
  require("./util/eventUtil");
const { createOrganization, getOrganizations, getOrganizationEvents,
  addOrganizationUser } =
  require("./util/organizationUtil");
const { addUsers, addOrganizations, addEvents, addAllData, wipeDatabase } =
  require("./util/dataManipulation");

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);
router.get("/upcoming-events", getUpcomingEvents);
router.get("/organizations", getOrganizations);
router.post("/organizations", createOrganization);
router.post("/organizations/addUser", addOrganizationUser);
router.get("/addUsers/:num", addUsers);
router.get("/addOrganizations/:num", addOrganizations);
router.get("/addEvents/:num", addEvents);

/* Wipe current DB's and recreate them.
   Note: Only use when you ABSOLUTELY HAVE TO!
*/
router.get("/wipeDB", wipeDatabase);

// QUERY: Get an event's information by an Event ID number.
router.get("/events/:eventID", getEvent);

// QUERY: Get an event's information (including RSVP's) by an Event ID number.

// QUERY: Get all the events within a given timeframe.

// QUERY: Get all the events for a given organization.
// Separate into both upcoming and past events.
router.get("/organizations/:organizationID/events", getOrganizationEvents)

// QUERY: Get all of the e-Board members of a given organization.

module.exports = router;

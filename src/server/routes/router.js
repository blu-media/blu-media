/* NPM Installation Dependencies */
const express = require("express");

/* Utility Functions */
const { createUser, getAllUsers } = require("./util/userUtil");
const {
  addRSVP,
  getEvent,
  getAllEvents,
  addAttendee,
  deleteAttendee,
  deleteRSVP
} = require("./util/eventUtil");
const {
  createOrganization,
  getOrganizations,
  addOrganizationMember
} = require("./util/organizationUtil");
const {
  addUsers,
  addOrganizations,
  addEvents,
  addAllData,
  wipeDatabase
} = require("./util/dataManipulation");

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);
router.get("/organizations", getOrganizations);
router.post("/organizations", createOrganization);
router.post("/organizations/addMember", addOrganizationMember);
router.get("/events", getAllEvents);
router.get("/events/:eventId", getEvent);
router.post("/events/addRSVP", addRSVP);
router.post("/events/addAttendee", addAttendee);
/* Delete RSVP and Attendees*/
router.post("/events/deleteRSVP", deleteRSVP);
router.post("/events/deleteAttendee", deleteAttendee);

/* Populate dummy data into the SQL Tables. */
router.get("/users/addUsers/:num", addUsers);
router.get("/organizations/addOrganizations/:num", addOrganizations);
router.get("/events/addEvents/:num", addEvents);

/* Wipe current DB's and recreate them.
   Note: Only use when you ABSOLUTELY HAVE TO!
*/
router.get("/wipeDB", wipeDatabase);

// QUERY: Get an event's information (including RSVP's) by an Event ID number.

// QUERY: Get all the events within a given timeframe.

// QUERY: Get all the events for a given organization.
// Separate into both upcoming and past events.
// router.get("/organizations/:organizationID/events", getOrganizationEvents);

// QUERY: Get all of the e-Board members of a given organization.

module.exports = router;

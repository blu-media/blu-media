/* NPM Installation Dependencies */
const express = require("express");

/* Utility Functions */
const {
  createUser,
  getAllUsers,
  getUserRSVPs
} = require("./util/userUtil");

const {
  addAttendee,
  addOrganization,
  addRSVP,
  deleteAttendee,
  deleteRSVP,
  getAllEvents,
  getEvent,
  getRSVP,
  getAttendee,
  updateResponse
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

/* User Functionality */
router.get("/users", getAllUsers);
router.get("/users/getRSVPs", getUserRSVPs);
router.post("/users", createUser);

router.get("/organizations", getOrganizations);
router.post("/organizations", createOrganization);
router.post("/organizations/addMember", addOrganizationMember);

router.get("/events", getAllEvents);
router.get("/events/:eventId", getEvent);
router.post("/events/addAttendee", addAttendee);
router.post("/events/addOrganization", addOrganization);
router.post("/events/addRSVP", addRSVP);
router.post("/events/getRSVP", getRSVP);
router.post("/events/getAttendee", getAttendee);
router.post("/events/deleteRSVP", deleteRSVP);
router.post("/events/deleteAttendee", deleteAttendee);

/* Populate dummy data into the SQL Tables. */
router.get("/users/addUsers/:num", addUsers);
router.get("/organizations/addOrganizations/:num", addOrganizations);
router.get("/events/addEvents/:num", addEvents);

/*Update RSVP responses*/
router.post("events/updateResponse", updateResponse);
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

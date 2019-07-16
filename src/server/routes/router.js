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
  getAttendees,
  getEvent,
  getRSVP,
  updateResponse
} = require("./util/eventUtil");

const {
  addOrganizationMember,
  createOrganization,
  getOrganizations,
} = require("./util/organizationUtil");

const {
  addEvents,
  addOrganizations,
  addUsers,
  wipeDatabase
} = require("./util/dataManipulation");

const router = express.Router();

/*** USER FUNCTIONALITY ***/

// Get all users.
router.get("/users", getAllUsers);

// Get all RSVP's for a user.
router.get("/users/rsvps", getUserRSVPs);

// Create a user.
router.post("/users", createUser);


/*** ORGANIZATION FUNCTIONALITY ***/

// Get all organizations.
router.get("/organizations", getOrganizations);

// Get all events for an organization.
// router.get("/organizations/:orgId/events", getOrganizationEvents);

// Create an organization.
router.post("/organizations", createOrganization);

// Add an executive board member to an organization.
router.post("/organizations/addMember", addOrganizationMember);

/*** EVENT FUNCTIONALITY ***/

// Get all events.
router.get("/events", getAllEvents);

// Get an event by ID.
router.get("/events/:eventId", getEvent);

// Add an attendee to an event.
router.post("/events/addAttendee", addAttendee);

// Delete an attendee from an event.
router.delete("/events/deleteAttendee/:eventId/:userId", deleteAttendee);

// Add an organization as a host to an event.
router.post("/events/addOrganization", addOrganization);

// Add an RSVP to an event.
router.post("/events/addRSVP", addRSVP);

// Get an RSVP for an event.
router.post("/events/getRSVP", getRSVP);

// Get all attendees for an event.
router.get("/events/:eventId/attendees", getAttendees);

// Delete an attendee from an event.
router.delete("/events/deleteRSVP/:eventId/:userId", deleteRSVP);


/*** DUMMY DATA FUNCTIONALITY ***/

// Populate User table with arbitrary number of users.
router.get("/users/addUsers/:num", addUsers);

// Populate Organizations table with arbitrary number of organizations.
router.get("/organizations/addOrganizations/:num", addOrganizations);

// Populate Events table with arbitrary number of events.
router.get("/events/addEvents/:num", addEvents);

router.get("/dummyData")

/* Wipe current DB. */
router.get("/wipeDB", wipeDatabase);

module.exports = router;

/* NPM Installation Dependencies */
const express = require("express");

/* Utility Functions */
const { createUser, getAllUsers, getUserRSVPs } = require("./util/userUtil");

const {
  addAttendee,
  addOrganizationToEvent,
  addRSVP,
  deleteAttendee,
  deleteOrganizationFromEvent,
  deleteRSVP,
  getAllEvents,
  getAttendees,
  getEventById,
  getRSVP,
  updateRSVP,
  createEvent,
  updateEventById,
  deleteEventById,
  getEventsInTimeFrame
} = require("./util/eventUtil");

const {
  addOrganizationMember,
  createOrganization,
  deleteOrganization,
  getEventsByOrganization,
  getOrganizations,
  updateOrganization
} = require("./util/organizationUtil");

const {
  addEvents,
  addOrganizations,
  addUsers,
  wipeDatabase
} = require("./util/dataManipulation");

const router = express.Router();

/********** USER FUNCTIONALITY **********/

// Get all users.
router.get("/users", getAllUsers);

// Get all RSVP's for a user.
router.get("/users/rsvps", getUserRSVPs);

// Create a user.
router.post("/users", createUser);

/********** ORGANIZATION FUNCTIONALITY **********/

// Get all organizations.
router.get("/organizations", getOrganizations);

// Get all events for an organization.
router.get("/organizations/:orgId/events", getEventsByOrganization);

// Create an organization.
router.post("/organizations", createOrganization);

// Update an organization.
router.patch("/organizations/:orgId/update-organization", updateOrganization);

// Delete an organization.
router.delete("/organizations/:orgId", deleteOrganization);

// Add an executive board member to an organization.
router.post("/organizations/add-member", addOrganizationMember);

/********** EVENT FUNCTIONALITY **********/

router.route("/events")
  .get(getAllEvents)
  .put(createEvent)

router.route("/events/search")
  .get(getEventsInTimeFrame)

router.route("/events/:eventId")
  .get(getEventById)
  .patch(updateEventById)
  .delete(deleteEventById);

router.route("/events/:eventId/organizations")
  .put(addOrganizationToEvent)
  .delete(deleteOrganizationFromEvent);

router.route("/events/:eventId/rsvps")
  .get(getRSVP)
  .put(addRSVP)
  .patch(updateRSVP)
  .delete(deleteRSVP);

router.route("/events/:eventId/attendees")
  .get(getAttendees)
  .put(addAttendee)
  .delete(deleteAttendee);

// - Get all the events within a given timeframe.
// - Get all events that happened in the past.
// - Get all events that are upcoming

/********** DUMMY DATA FUNCTIONALITY /**********/

// Populate User table with arbitrary number of users.
router.get("/users/add-users/:num", addUsers);

// Populate Organizations table with arbitrary number of organizations.
router.get("/organizations/add-organizations/:num", addOrganizations);

// Populate Events table with arbitrary number of events.
router.get("/events/add-events/:num", addEvents);

/* Wipe current DB. */
router.get("/wipe-db", wipeDatabase);

module.exports = router;

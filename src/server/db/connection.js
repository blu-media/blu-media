/* NPM Installation Dependencies */
const Sequelize = require('sequelize');

/* DB Model Schemas */
const UserModel = require('./models/user');
const OrganizationModel = require('./models/organization');
const EventModel = require('./models/event');
const EventRSVPModel = require('./models/eventRSVP');
const OrganizationMemberModel = require('./models/organizationMember');

const { localDBUsername, localDBPassword } = require('./config');

/* Establish the DB Connection */
const devDBConnection =
  `postgres://${localDBUsername}:${localDBPassword}@localhost:5432/cubal-media`;
const sequelize = new Sequelize(devDBConnection);

// STAGING ENVIORNMENT --> STAGED ENVIORNMENT --> REMOTE ENVIRONMENT (GITHUB)

/* Connect all the models/tables in the database to a db object, 
   so everything is accessible via one object. */
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = UserModel(sequelize, Sequelize);;
db.organizations = OrganizationModel(sequelize, Sequelize);
db.events = EventModel(sequelize, Sequelize);
db.eventRSVPs = EventRSVPModel(sequelize, Sequelize);
db.organizationMembers = OrganizationMemberModel(sequelize, Sequelize);

// THIS IS A TEST.

/* Associations */

// Users (Members) --> Organizations
db.users.belongsToMany(db.organizations, {
  through: {
    model: 'organization_member'
  }
});

// Organizations --> Users
db.organizations.belongsToMany(db.users, {
  as: 'members',
  through: {
    model: 'organization_member'
  }
});

// Organizations --> Events
db.organizations.belongsToMany(db.events, {
  through: 'events_organizations'
});

// Events --> Organizations
db.events.belongsToMany(db.organizations, {
  through: 'events_organizations'
});

// Events --> Users (Attendees)
db.events.belongsToMany(db.users, {
  as: 'attendees',
  through: 'event_attendees'
});

// Users --> Events
db.users.belongsToMany(db.events, {
  through: 'event_attendees'
});


// Events --> Users (RSVP's)
db.events.belongsToMany(db.users, {
  as: 'rsvps',
  through: {
    model: 'event_rsvp'
  }
});

// Users --> Events
db.users.belongsToMany(db.events, {
  through: {
    model: 'event_rsvp'
  }
});

/* Connect to the DB. */
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = {
  sequelize,
  db
}

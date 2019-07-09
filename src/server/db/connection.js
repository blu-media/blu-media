/* NPM Installation Dependencies */
const Sequelize = require('sequelize');

/* DB Model Schemas */
const UserModel = require('./models/user');
const OrganizationModel = require('./models/organization');
const EventModel = require('./models/event');
const EventRSVPModel = require('./models/eventRSVP');

const { localDBUsername, localDBPassword } = require('./config');

/* Establish the DB Connection */
const devDBConnection =
  `postgres://${localDBUsername}:${localDBPassword}@localhost:5432/cubal-media`;
const sequelize = new Sequelize(devDBConnection);

/* Connect all the models/tables in the database to a db object, 
   so everything is accessible via one object. */
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = UserModel(sequelize, Sequelize);;
db.organizations = OrganizationModel(sequelize, Sequelize);
db.events = EventModel(sequelize, Sequelize);
db.eventRSVPs = EventRSVPModel(sequelize, Sequelize);

/* Associations */
db.users.belongsToMany(db.organizations, {
  through: 'users_and_organizations'
});

db.organizations.belongsToMany(db.users, {
  as: 'members',
  through: 'users_and_organizations'
});

db.organizations.belongsToMany(db.events, {
  through: 'events_and_organizations'
});

db.events.belongsToMany(db.organizations, {
  through: 'events_and_organizations'
});

db.events.belongsToMany(db.users, {
  as: 'attendees',
  through: {
    model: 'event_rsvp'
  }
});

db.events.belongsToMany(db.users, {
  as: 'rsvps',
  through: {
    model: 'event_rsvp'
  }
});

db.users.belongsToMany(db.events, {
  through: {
    model: 'event_rsvp'
  }
});

// Fill in organizations to events associations.

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

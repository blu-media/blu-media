/* NPM Installation Dependencies */
const Sequelize = require('sequelize');

/* DB Model Schemas */
const UserModel = require('./models/user');
const OrganizationModel = require('./models/organization');
const EventModel = require('./models/event');

const { localDBUsername, localDBPassword } = require('./config');

/* Establish the DB Connection */
const devDBConnection =
  `postgres://${localDBUsername}:${localDBPassword}@localhost:5432/cubal-media`;
const sequelize = new Sequelize(devDBConnection);

/* Sequelizing the DB Models */
const User = UserModel(sequelize, Sequelize);
const Organization = OrganizationModel(sequelize, Sequelize);
const Event = EventModel(sequelize, Sequelize);

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
  User,
  Organization,
  Event
}

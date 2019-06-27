const { User } = require("../../db/connection");
const { Organization } = require("../../db/connection");
const { Event } = require("../../db/connection");
const faker = require("faker");
const random = require("random");

const { sequelize } = require('../../db/connection');

var addUsers = (request, response) => {
  User
    .create({
      email: "abenazer101@gmail.com",
      firstName: "Abenazer",
      gradYear: "2022",
      lastName: "Mekete",
      organizations: ["URMC", "BSU", "ESSA", "CRC"],
      password: "123456789",
      profilePicture: "profile.jpg",
      userId: "1"
    })
    .then((user) => {
      response.send(user);
    });
};

var addOrganizations = (request, response) => {
  Organization
    .create({
      about: faker.lorem.paragraph(),
      acronym: faker.company.companySuffix(),
      // contactInfo:
      // groups: [faker.company.companyName(),faker.company.companyName(),faker.company.companyName()] ,
      // logo:
      name: faker.company.companyName(),
      organizationId: faker.lorem.word()
    })
    .then((organization) => {
      response.send(organization);
    });
};

var addEvents = (request, response) => {
  Event
    .create({
      attendees: [
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName()
      ],
      // attire:
      blurb: faker.lorem.paragraph(),
      date: faker.date.future(),
      endTime: faker.date.future(),
      eventId: faker.lorem.word(),
      // images:
      // flyer:
      location: faker.address.streetName(),
      name: faker.lorem.word(),
      // organizations:
      // rsvps:
      startTime: faker.date.future(),
      type: faker.lorem.word()
    })
    .then((event) => {
      response.send(event);
    });
};

// var addAllData = (request, response) => {
//   addUsers, addEvents, addOrganizations;
// };

const wipeDatabase = (request, response) => {
  sequelize.sync({ force: true })
    .then(() => {
      response.send('Database wiped successfully and have been recreated!');
    });
}

module.exports = {
  addUsers,
  addOrganizations,
  addEvents,
  wipeDatabase
  //   addAllData
};

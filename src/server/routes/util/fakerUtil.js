const { User } = require("../../db/connection");
const { Organization } = require("../../db/connection");
const { Event } = require("../../db/connection");
const faker = require("faker");
const random = require("random");

var addUsers = (request, response) => {
  User.create({
    email: "abenazer101@gmail.com",
    firstName: "Abenazer",
    gradYear: "2022",
    lastName: "Mekete",
    organizations: ["URMC", "BSU", "ESSA", "CRC"],
    password: "123456789",
    profilePicture: "profile.jpg",
    userId: "1"
  });
};

var addOrganizations = (request, response) => {
  Organization.create({
    about: faker.lorem.paragraph(),
    acronym: faker.company.companySuffix(),
    // contactInfo:
    // groups: [faker.company.companyName(),faker.company.companyName(),faker.company.companyName()] ,
    // logo:
    name: faker.company.companyName(),
    organizationId: faker.lorem.word()
  });
};

var addEvents = (request, response) => {
  Event.create({
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
  });
};

// var addAllData = (request, response) => {
//   addUsers, addEvents, addOrganizations;
// };

module.exports = {
  addUsers,
  addOrganizations,
  addEvents
  //   addAllData
};

const { db } = require("../../db/connection");
const faker = require("faker");
const random = require("random");

const { sequelize } = require("../../db/connection");

var addUsers = (request, response) => {
  var i;
  for (i = 0; i < request.params.num; i++) {
    db.users.create({
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      gradYear: random.int(2019, 2022),
      lastName: faker.name.lastName(),
      organizations: [
        faker.company.companyName(),
        faker.company.companyName(),
        faker.company.companyName()
      ],
      password: faker.lorem.word(),
      //profilePicture: faker.image.image(),
      userId: faker.lorem.word()
    });
  }

  response.send(`${request.params.num} users created!`);
};

var addOrganizations = (request, response) => {
  var i;
  for (i = 0; i < request.params.num; i++) {
    db.organizations.create({
      about: faker.lorem.paragraph(),
      acronym: faker.company.companySuffix(),
      // contactInfo:
      groups: [
        faker.company.companyName(),
        faker.company.companyName(),
        faker.company.companyName()
      ],
      //logo: faker.image.avatar(),
      name: faker.company.companyName(),
      organizationId: faker.lorem.word()
    });
  }

  response.send(`${request.params.num} organizations created!`);
};

var addEvents = (request, response) => {
  var i;

  for (i = 0; i < request.params.num; i++) {
    db.events.create({
      attendees: [
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName()
      ],
      attire: faker.commerce.color(),
      blurb: faker.lorem.paragraph(),
      date: faker.date.future(),
      endTime: faker.date.future(),
      eventId: faker.lorem.word(),
      //images: [faker.image.image(), faker.image.image(), faker.image.image()],
      //flyer: faker.image.image(),
      location: faker.address.streetName(),
      name: faker.lorem.word(),
      organizations: [
        faker.company.companyName(),
        faker.company.companyName(),
        faker.company.companyName()
      ],
      // rsvps:
      startTime: faker.date.future(),
      type: faker.lorem.word()
    });
  }

  response.send(`${request.params.num} events created!`);
};

const wipeDatabase = (request, response) => {
  sequelize.sync({ force: true }).then(() => {
    response.send("Database wiped successfully and have been recreated!");
  });
};

module.exports = {
  addUsers,
  addOrganizations,
  addEvents,
  wipeDatabase
};

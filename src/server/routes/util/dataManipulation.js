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
      password: faker.lorem.word(),
      // profilePicture: faker.image.image(),
      id: i.toString()
    });
  }

  response.send(`${i} have been created successfully!`);
}

var addOrganizations = (request, response) => {
  var i;
  for (i = 0; i < request.params.num; i++) {
    db.organizations.create({
      about: faker.lorem.paragraph(),
      acronym: faker.company.companySuffix(),
      // contactInfo:
      // logo: faker.image.avatar(),
      name: faker.company.companyName(),
      id: i.toString()
    });
  }

  response.send(`${i} organizations have been created successfully!`);
};

var addEvents = (request, response) => {
  var i;

  for (i = 0; i < request.params.num; i++) {
    db.events.create({
      attire: faker.commerce.color(),
      blurb: faker.lorem.paragraph(),
      date: faker.date.future(),
      endTime: faker.date.future(),
      id: i.toString(),
      flyer: faker.image.image(),
      location: faker.address.streetName(),
      name: faker.lorem.word(),
      startTime: faker.date.future(),
      type: faker.lorem.word()
    });
  }

  response.send(`${request.params.num} events have been created successfully!`);
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

/* NPM Installation Dependencies */
const faker = require("faker");
const random = require("random");

// DB Object and Other Utility Functions
const { db } = require("../../db/connection");
const { createQRCode } = require('./eventUtil');

var addUsers = (request, response) => {
  var i;

  for (i = 0; i < request.params.num; i++) {
    db.users.create({
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      gradYear: random.int(2019, 2022),
      id: i.toString(),
      lastName: faker.name.lastName(),
      password: faker.lorem.word()
    });
  }

  response.send(`${i} users have been created successfully!`);
}

var addOrganizations = (request, response) => {
  var i;

  for (i = 0; i < request.params.num; i++) {
    db.organizations.create({
      about: faker.lorem.paragraph(),
      acronym: faker.company.companySuffix(),
      name: faker.company.companyName(),
      id: i.toString()
    });
  }

  response.send(`${i} organizations have been created successfully!`);
};

var addEvents = async (request, response) => {
  var i;

  for (i = 0; i < request.params.num; i++) {
    // Create a QR code for the event.
    const qrCode = await createQRCode(i.toString());

    db.events.create({
      attire: faker.commerce.color(),
      blurb: faker.lorem.paragraph(),
      date: faker.date.future(),
      endTime: faker.date.future(),
      id: i.toString(),
      flyer: faker.image.image(),
      location: faker.address.streetName(),
      name: faker.lorem.word(),
      qrCode: qrCode,
      startTime: faker.date.future(),
      type: faker.lorem.word()
    });
  }

  response.send(`${request.params.num} events have been created successfully!`);
};

const wipeDatabase = (request, response) => {
  db.sequelize.sync({ force: true }).then(() => {
    response.send("Database wiped successfully and have been recreated!");
  });
};

module.exports = {
  addEvents,
  addOrganizations,
  addUsers,
  wipeDatabase
};

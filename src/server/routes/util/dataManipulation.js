/* NPM Installation Dependencies */
const faker = require("faker");
const random = require("random");

// DB Object and Other Utility Functions
const { db } = require("../../db/connection");
const { createQRCode } = require('./eventUtil');

const addUsers = (num) => {
  var i;

  for (i = 0; i < num; i++) {
    db.users.create({
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      gradYear: random.int(2019, 2022),
      id: i.toString(),
      lastName: faker.name.lastName(),
      password: faker.lorem.word()
    });
  }
  console.log(`${i} users have been created successfully!`);
}

const addOrganizations = (num) => {
  var i;

  for (i = 0; i < num; i++) {
    db.organizations.create({
      about: faker.lorem.paragraph(),
      acronym: faker.company.companySuffix(),
      name: faker.company.companyName(),
      id: i.toString()
    });
  }
  console.log(`${i} organizations have been created successfully!`);
};

const addEvents = async (num) => {
  var i;

  for (i = 0; i < num; i++) {
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
      startTime: faker.date.past(),
      type: faker.lorem.word()
    });
  }
  console.log(`${num} events have been created successfully!`);
};

const wipeDatabase = () => {
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Database wiped and recreated successfully!");
  });
};

const wipeAndAdd = (request, response) => {
  let num = request.params.num;
  wipeDatabase()
  addUsers(num)
  addOrganizations(num)
  addEvents(num)
  response.send("Database wiped, recreated, and repopulated successfully!");
}

module.exports = {
  addEvents,
  addOrganizations,
  addUsers,
  wipeDatabase,
  wipeAndAdd
};

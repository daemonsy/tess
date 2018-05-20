const faker = require('faker');

const candidates = Array(10).fill().map(() => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email()
  }
});

exports.seed = (knex, Promise) =>
  knex('candidates').del()
    .then(() => knex('candidates').insert(candidates))

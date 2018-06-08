const { sample, random } = require('lodash');
const faker = require('faker');

const issues = Array(90).fill().map(() => {
  return {
    description: faker.lorem.paragraphs(random(1, 5, false)),
    reportedAt: new Date(),
    status: sample(['NEW', 'RESOLVED', 'IGNORED']),
    context: {
      client: {
        ip: faker.internet.ip(),
        useragent: faker.internet.userAgent()
      }
    }
  }
});

exports.seed = (knex, Promise) =>
  knex('issues').del()
    .then(() => knex('issues').insert(issues))

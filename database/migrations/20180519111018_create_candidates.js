
exports.up = (knex, Promise) =>
  Promise.all(
    [
      knex.schema.raw('CREATE EXTENSION IF NOT EXISTS citext'),
      knex.schema.createTable('candidates', t => {
        t.increments().primary();
        t.string('firstName', '120').notNullable();
        t.string('lastName', '120').notNullable();
        t.specificType('email', 'citext').notNullable().unique();

        t.timestamps(true, true);
      })
    ]);

exports.down = (knex, Promise) =>
  Promise.all([knex.schema.dropTable('candidates')]);

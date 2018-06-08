
exports.up = (knex, Promise) =>
  knex.schema.raw('CREATE EXTENSION IF NOT EXISTS citext').then(() =>
    knex.schema.createTable('members', t => {
      t.increments().primary();
      t.string('firstName').notNullable();
      t.string('lastName').notNullable();
      t.specificType('email', 'citext').notNullable().unique();

      t.timestamps(true, true);
    })
  );

exports.down = (knex, Promise) =>
  knex.schema.dropTable('members');

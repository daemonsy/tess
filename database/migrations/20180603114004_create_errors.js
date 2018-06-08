
exports.up = (knex, Promise) =>
  knex.schema.createTable('errors', t => {
    t.increments().primary();

    t.uuid('uuid').notNullable();

    t.text('message').notNullable();
    t.string('type').notNullable();

    t.timestamps(true, true);
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('errors');

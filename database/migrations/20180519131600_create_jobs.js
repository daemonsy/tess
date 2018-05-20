
exports.up = (knex, Promise) =>
  knex.schema.createTable('jobs', t => {
    t.increments().primary();
    t.string('title').notNullable();

    t.timestamps(true, true);
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('jobs');

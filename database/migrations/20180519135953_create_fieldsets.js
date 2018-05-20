
exports.up = (knex, Promise) =>
  knex.schema.createTable('fieldsets', t => {
    t.increments().primary();
    t.string('name').notNullable().defaultTo('Default');

    t.timestamps(true, true);
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('fieldsets');

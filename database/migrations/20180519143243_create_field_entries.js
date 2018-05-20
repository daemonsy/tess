
exports.up = (knex, Promise) =>
  knex.schema.createTable('field_entries', t => {
    t.increments().primary();

    t.uuid('uuid').notNullable();
    t.integer('application_id').unsigned().notNullable();

    t.foreign('application_id').references('id').inTable('applications');
    t.string('name').notNullable();
    t.string('type').notNullable();
    t.string('question').notNullable();
    t.text('answer');
    t.boolean('required').defaultTo(false).notNullable();

    t.timestamps(true, true);
    t.index('application_id');
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('field_entries');

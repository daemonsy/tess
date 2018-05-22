
exports.up = (knex, Promise) =>
  knex.schema.createTable('fieldEntries', t => {
    t.increments().primary();

    t.uuid('uuid').notNullable();
    t.integer('applicationId')
      .unsigned().notNullable()
      .references('id').inTable('applications').onDelete('CASCADE');
    t.string('name').notNullable();
    t.string('type').notNullable();
    t.string('question').notNullable();
    t.text('answer');
    t.boolean('required').defaultTo(false).notNullable();

    t.timestamps(true, true);
    t.index('applicationId');
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('field_entries');

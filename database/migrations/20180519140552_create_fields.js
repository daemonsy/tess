
exports.up = (knex, Promise) =>
  knex.schema.raw('CREATE EXTENSION IF NOT EXISTS pgcrypto').then(() =>
    knex.schema.createTable('fields', t => {
      t.increments().primary();

      t.uuid('uuid').notNullable().defaultTo(knex.raw('gen_random_uuid()'));
      t.string('name').notNullable();
      t.string('type').notNullable();
      t.text('question').notNullable();
      t.text('internalDescription');
      t.boolean('required').notNullable().defaultTo(false);

      t.integer('fieldsetId')
        .unsigned().notNullable()
        .references('id').inTable('fieldsets').onDelete('CASCADE');

      t.index('fieldsetId');
      t.unique(['fieldsetId', 'uuid']);

      t.timestamps(true, true);
    }))

exports.down = (knex, Promise) =>
  knex.schema.dropTable('fields');

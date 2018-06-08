
exports.up = (knex, Promise) =>
  knex.schema.createTable('issues', t => {
    t.increments().primary();

    t.text('description')
      .comment(`User description of the issue`)
      .notNullable();

    t.string('status').notNullable();

    t.jsonb('context');

    t.timestamp('reportedAt')
      .comment(`Time when the error happened as recorded by the client`)
      .notNullable();

    t.timestamps(true, true);
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('issues');


exports.up = (knex, Promise) =>
  knex.schema.createTable('applications', t => {
    t.increments().primary();

    t.integer('candidateId')
      .unsigned().notNullable()
      .references('id').inTable('candidates').onDelete('CASCADE');

    t.integer('jobId')
      .unsigned().notNullable()
      .references('id').inTable('jobs').onDelete('CASCADE');

    t.timestamps(true, true);
  })

exports.down = (knex, Promise) =>
  knex.schema.dropTable('applications');

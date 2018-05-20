
exports.up = (knex, Promise) =>
  knex.schema.alterTable('jobs', t => {
    t.integer('fieldsetId')
      .unsigned().notNullable()
      .references('id').inTable('fieldsets');
  })

exports.down = (knex, Promise) =>
  knex.schema.alterTable('jobs', t => {
    t.dropColumn('fieldsetId');
  });

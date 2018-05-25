import knex from 'knex';
import knexDBmanager from 'knex-db-manager';
import config from 'database/config';

const env = process.env.NODE_ENV || 'development';
const db = knex(config[env]);

const dbManager = knexDBmanager.databaseManagerFactory({
  knex: config[env],
  dbManager: {
    superUser: process.env.PG_USERNAME,
    superPassword: process.env.PG_PASSWORD
  }
});

export { dbManager };
export default db;

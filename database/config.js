const { PG_USERNAME, PG_PASSWORD, NODE_ENV } = process.env;

const defaultConfig = {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    port: 5432,
    database: `tess_${NODE_ENV || 'development'}`,
    user: PG_USERNAME,
    password: PG_PASSWORD
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  pool: {
    min: 2,
    max: 5
  }
}

module.exports = {
  development: { ...defaultConfig },
  test: { ...defaultConfig },
  staging: { ...defaultConfig },
  production: { ...defaultConfig }
};

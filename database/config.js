const { PG_USERNAME, PG_PASSWORD } = process.env;

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: `tess_development`,
      user: PG_USERNAME,
      password: PG_PASSWORD
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: `tess_staging`,
      user: PG_USERNAME,
      password: PG_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: `tess_production`,
      user: PG_USERNAME,
      password: PG_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

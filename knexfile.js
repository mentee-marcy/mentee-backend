// Update with your config settings.
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'mentee',
      user:     process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD
    }
  },

  
  production: {
    client: 'pg',
    connection: {
      database: 'mentee',
      user:     process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD
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

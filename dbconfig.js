const {Pool} = require('pg')
require('dotenv').config()

//new instance of the Pool class
const pool = new Pool({
    database: process.env.DATABASE,
    user:     process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD
})


module.exports = pool;
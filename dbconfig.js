const {Pool} = require('pg')
require('dotenv').config()

//new instance of the Pool class
let connectionString = 'postgresql://postgres:gdMrPaTjWUcu0mgKFF7R@containers-us-west-168.railway.app:8069/railway'
const pool = new Pool({
    connectionString
    // database: 'mentee',
    // user:     process.env.POSTGRES_USERNAME,
    // password: process.env.POSTGRES_PASSWORD
})


module.exports = pool;
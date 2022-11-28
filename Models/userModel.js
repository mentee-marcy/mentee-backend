const pool = require('../dbconfig');

function getUsersFromDB(){
    return  pool.query('SELECT * FROM users').then(results => {return results.rows})
}

module.exports ={
    getUsersFromDB
}
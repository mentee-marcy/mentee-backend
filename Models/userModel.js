const pool = require('../dbconfig');

function getUsersFromDB(){
    return  pool.query('SELECT * FROM users').then(results => {return results.rows})
}

function findUserFromDB(username){
    return pool.query('SELECT * FROM users WHERE username = $1',[username]).then(results => {
        return results.rows
    })
}

function addUserToDB(...args){
    return pool.query('INSERT INTO users (first_name,last_name,username,email,password,tech_stack,mentor) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', args).then(results => {
        return results.rows[0]
    })
}
module.exports ={
    getUsersFromDB,
    findUserFromDB,
    addUserToDB
}
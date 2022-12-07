const pool = require('../dbconfig');

function retrieveMessages(user_to, user_from) {
    return pool.query(`SELECT * FROM messages WHERE user_to = $1 AND user_from = $2 OR user_to = $2 AND user_from = $1`,[user_to,user_from]).then(results => {return results.rows});
}

function createChatfromDB(user_to, user_from, text) {
    return pool.query(`INSERT INTO messages (user_to, user_from, text) VALUES ($1,$2,$3) RETURNING *`,[user_to,user_from,text]).then(results => {return results.rows});
}

module.exports = {
    retrieveMessages,
    createChatfromDB
}
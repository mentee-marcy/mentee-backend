const pool = require('../dbconfig');

function getMessagesFromDB(sender_id,reciever_id){
    return  pool.query('SELECT * FROM messages WHERE sender_id = $1 AND reciever_id = $2 OR sender_id = $2 AND reciever_id = $1',[sender_id,reciever_id])
    .then(results => {
        return results.rows
    })
}

function addMessageToDB(sender_Id,reciever_Id,text){
    return pool.query('INSERT INTO messages (sender_id,reciever_id,text) VALUES ($1,$2,$3) RETURNING * ',[sender_Id, reciever_Id,text])
    .then(results => {
        return results.rows
    })
}

module.exports = {
    getMessagesFromDB,
    addMessageToDB
}
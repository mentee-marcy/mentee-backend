const pool = require('../dbconfig');

function getMessagesFromDB(sender_id,reciever_id){
    //console.log({sender_id,reciever_id})
    return  pool.query('SELECT * FROM messages WHERE sender_id = $1 AND reciever_id = $2 OR sender_id = $2 AND reciever_id = $1',[sender_id,reciever_id])
    .then(results => {
        console.log(results)
        return results.rows
    })
}

module.exports = {
    getMessagesFromDB
}
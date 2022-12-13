const pool = require('../dbconfig');

function getUsersFromDB(){
    return  pool.query('SELECT * FROM users').then(results => {return results.rows})
}

async function getSingleUserFromDB(id){
    let data =  await pool.query('SELECT * FROM users WHERE id = $1',[id]).then(results => {return results.rows})
     if(data.mentor){
        data =  pool.query('SELECT*FROM users JOIN mentor ON users.id = mentor_id WHERE user.id = $1 )',[id]).then(results => {return results.rows})
     }
     return data
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

function addMentorDataToDB(...args){
    return pool.query('INSERT INTO mentor (mentor_id,company_name,bio,title,location) VALUES ($1,$2,$3,$4,$5) RETURNING *', args)
}


function addUserFriendToDB(userId,friendId){
    return pool.query ("INSERT INTO friend_requests (sender_id,reciever_id) VALUES ($1,$2) RETURNING *",[userId, friendId])
}

function getFriendsFromDB(id){
    return pool.query(
        "SELECT users.id, first_name, last_name,tech_stack,mentor FROM friend_requests JOIN users ON users.id = sender_id OR users.id = reciever_id WHERE (sender_id = $1  OR reciever_id = $1) AND is_accepted = true",
        [id]).then(results => results.rows) 
    
}

function updateFriendRequestInDB(userId,friendId){
    console.log({userId, friendId})
    return pool.query("UPDATE friend_requests SET is_accepted = TRUE WHERE sender_id = $1 AND reciever_id = $2 RETURNING *",[friendId, userId])
}

function deleteFriendFromDB(userId,friendId){
    return pool.query("DELETE FROM friend_requests WHERE sender_id = $1 AND reciever_id = $2 OR reciever_id = $1 AND sender_id = $2 RETURNING *",
    [userId, friendId])
}

function getPendingFriendRequestFromDB(id){
    return pool.query(
        "SELECT users.id, first_name, last_name,tech_stack,mentor FROM friend_requests JOIN users ON users.id = sender_id WHERE (reciever_id = $1) AND is_accepted = false",
        [id]).then(results => results.rows) 
    
}

module.exports ={
    getUsersFromDB,
    findUserFromDB,
    addUserToDB,
    addMentorDataToDB,
    getSingleUserFromDB,
    addUserFriendToDB,
    getFriendsFromDB,
    updateFriendRequestInDB,
    deleteFriendFromDB,
    getPendingFriendRequestFromDB
}
const userModel = require('../Models/userModel');

const getAllUsers = async(req, res)=>{
    const users = await userModel.getUsersFromDB();
    console.log(users)
    res.status(200).json(users)
}


module.exports ={
    getAllUsers
}
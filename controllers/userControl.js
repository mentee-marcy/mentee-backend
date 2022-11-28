const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');
const getAllUsers = async(req, res)=>{
    const users = await userModel.getUsersFromDB();
    console.log(users)
    res.status(200).json(users)
}

const addUser = async(req,res)=>{
    const {first_name,last_name, username, email, password,tech_stack,mentor} = req.body
    const checkUserExist = await userModel.findUserFromDB(username)
  
    if(checkUserExist.length>0) res.json({message:"user already exists"})
    else{
        try{
            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(password,salt)
            const data = await userModel.addUserToDB(first_name,last_name,username,email,hashedPassword,tech_stack,mentor)
            res.status(201).json(data)
        }
        catch (err){
            console.log(err)
            res.status(404).send('server error')
        }
    }
}


module.exports ={
    getAllUsers,
    addUser
}
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req,res,next) => {
    const token = req.headers["x-access-token"]
    if(!token) 
        res.status(400).send("Please send a token")
    else{
        jwt.verify(token, "jwtSecret", (err,user) => {
            if(err) res.status(400).json({authorized:false,message:"you failed to authenticate"})
            else{   
                req.id = user.id
                next()
            }
        })  

    }
}
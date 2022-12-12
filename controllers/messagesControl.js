const messagesModel = require('../Models/messagesModel');

const getMessages = async (req, res) =>{
    const {senderId, recieverId} = req.params;
    //console.log({senderId, recieverId})
    if(!(senderId || recieverId)) return res.send("no senderId and recieverId not specified")
    try{
        const messages = await messagesModel.getMessagesFromDB(senderId, recieverId);
        return res.status(201).json(messages)
    }
    catch(err){
        return res.status(500).json(err)
    }
}


module.exports ={
    getMessages
}
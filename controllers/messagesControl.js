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

const addMessage = async (req,res) =>{
    const {senderId, recieverId} = req.params;
    const text = req.body.message;
    try{
        const newText = await messagesModel.addMessageToDB(senderId,recieverId,text);
        return res.status(201).json(newText);
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports ={
    getMessages,
    addMessage
}
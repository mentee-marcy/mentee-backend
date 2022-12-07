const MessageModel = require('../Models/MessageModel');

    const getMessage = async (req, res) => {
        const {user_to, user_from} = req.params;
        if(!user_to || !user_from) return;
        try {
            const messageArray = await MessageModel.retrieveMessages(user_to, user_from);
            return res.status(201).json(messageArray);
        }catch(err) {
            return res.status(404).json(err);
        }
    }
    const createChat = async (req, res) => {
        const {user_to, user_from} = req.params;
        const text = req.body.text;
        try {
            const newMessage = await MessageModel.createChatfromDB(
                user_to,
                user_from,
                text
            );
            return res.status(201).json(newMessage);
        }catch(err) {
            return res.status(404).json(err);
        }
    }


module.exports = {
    getMessage,
    createChat
};
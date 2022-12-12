const express =require('express')
const router = express.Router()
const verifyJWT = require('../auth')
const messagesControl = require('../controllers/messagesControl')

router.get('/:senderId/:recieverId', messagesControl.getMessages);
router.post('/:senderId/:recieverId',messagesControl.addMessage)
module.exports = router
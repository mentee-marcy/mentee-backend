const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/MessageController');

router.get('/:user_to/message/:user_from', MessageController.getMessage);
router.post('/:user_to/message/:user_from', MessageController.createChat);

module.exports = router;
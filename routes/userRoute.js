const express =require('express')
const router = express.Router()
const userControl = require('../controllers/userControl')


router.get('/', userControl.getAllUsers);
router.post('/register', userControl.addUser)

router.all('*', (req,res)=>{
    res.send('This path does not exist')
});

module.exports = router
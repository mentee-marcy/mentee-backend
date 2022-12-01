const express =require('express')
const router = express.Router()
const userControl = require('../controllers/userControl')
const verifyJWT = require('../auth')

router.get('/', userControl.getAllUsers);
router.get('/:id', verifyJWT, userControl.getUser);
router.post('/register', userControl.addUser)
router.post('/login', userControl.findUser)

router.all('*', (req,res)=>{
    res.send('This path does not exist')
});

module.exports = router
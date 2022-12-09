const express =require('express')
const router = express.Router()
const userControl = require('../controllers/userControl')
const verifyJWT = require('../auth')

router.get('/', userControl.getAllUsers);
router.get('/profile', verifyJWT, userControl.getUser);
router.post('/register', userControl.addUser)
router.post('/login', userControl.findUser)
router.post('/friend/:id', userControl.addUserAsFriend)
router.get('/:id/friends', userControl.getFriendsForUser)
router.put('/friend/:id', userControl.acceptFriendRequest)
router.delete('/friends/:id', userControl.deleteFriend)
router.get('/friends/requests/:id',userControl.getPendingFriendRequest)
router.get('/:id', userControl.getSingleUser)

router.all('*', (req,res)=>{
    res.send('This path does not exist')
});

module.exports = router
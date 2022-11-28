//server
const express = require('express');
const app = express();
let cors = require('cors');

//Port
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json())

//require routes
const userRoute = require('./routes/userRoute.js');

//navigate routes
app.use('/users', userRoute)


//all other routes
app.all('*', (req, res)=>{
    res.send('Path does not exist')
});

// port listener
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
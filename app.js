//server
const express = require('express');
const app = express();
let cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

//Port
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json())


//require routes
const userRoute = require('./routes/userRoute.js');
const messageRoute = require('./routes/messageRoute')
//navigate routes
app.use('/users', userRoute)
app.use('/messages', messageRoute )

//all other routes
app.all('*', (req, res)=>{
    res.send('Path does not exist')
});

//chat server
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"]
    }
});

io.on("connection", socket => {
    console.log('connected', socket.id);
  
    socket.on("chat", payload => {
      console.log('payload', payload)
      socket.broadcast.emit("receive_message");
    }); 
  
    socket.on("disconnect", () => {
      console.log("user disconnected", socket.id);
    });
});

// port listener
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});
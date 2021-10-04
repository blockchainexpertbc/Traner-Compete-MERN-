const fs = require('fs');
const { getIdBySocket } = require('../service');
const service = require('../service');

module.exports = (server) => {
 
  const io = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["rtc-app-header"],
      credentials: true
    }
  });

  io.sockets.on('error', err => console.log(err));
  
  io.sockets.on("connection", socket => {
  
    console.log('a user connected')
    socket.on('createdUser', user => {
      io.emit('login', service.login(user, socket));
      socket.emit('loadUsers', service.users);
    })


    socket.on('disconnect', () => {
      delete getIdBySocket[socket];
    })
  });

  return io;
}


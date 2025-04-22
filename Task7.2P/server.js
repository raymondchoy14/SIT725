const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000; // Set the port after initializing socket.io

app.use(express.static('public')); // Serve static files from 'public' folder

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Emit random number every second
  setInterval(() => {
    socket.emit('number', Math.floor(Math.random() * 10));
  }, 1000);
});

http.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

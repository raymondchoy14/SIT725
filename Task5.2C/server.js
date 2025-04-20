const express = require('express');
const app = express();
const PORT = 3000;

// Import route
const roomRoutes = require('./routes/rooms');

app.use('/api/rooms', roomRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Hotel Room Listing Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


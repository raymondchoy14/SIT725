const express = require('express');
const app = express();
const PORT = 3000;

// Import route file
const detectRoutes = require('./routes/detect');

app.use(express.json());
app.use('/api/detect', detectRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the AI-Powered Phishing Detection Tool!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Import Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello World! 🌍 Server is running!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
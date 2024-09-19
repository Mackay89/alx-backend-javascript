const express = require('express');
const app = express();

// Define your routes here
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Export the app instance
module.exports = app;


const express = require('express');
const app = express();
const port = 7865;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// /available_payments endpoint
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// /login endpoint
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('UserName is required');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Export the app instance
module.exports = app;


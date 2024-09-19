const express = require('express');

const app = express();
const PORT = 1245;

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/**
 * Sends "Hello Holberton School!" response for the root endpoint.
 * @name GET /
 * @function
 * @memberof module:4-http-express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {undefined}
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

/**
 * The HTTP server listening on port 1245.
 * @type {Object}
 * @memberof module:4-http-express
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;

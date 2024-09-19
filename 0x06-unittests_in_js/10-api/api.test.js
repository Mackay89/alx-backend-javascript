/* eslint-disable jest/expect-expect */
const assert = require('assert');
const http = require('http');

// Set up the endpoint URLs
const BASE_URL = 'http://localhost:7866';
const LOGIN_URL = `${BASE_URL}/login`;

// Test the /login endpoint
describe('/login', () => {
  it('should return a welcome message with the username', (done) => {
    // Define the request payload
    const payload = JSON.stringify({ userName: 'john_doe' });

    // Set up the request options
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    // Create and send the HTTP request
    const req = http.request(LOGIN_URL, options, (res) => {
      let data = '';

      // Accumulate response data
      res.on('data', (chunk) => {
        data += chunk;
      });

      // On end of response
      res.on('end', () => {
        // Perform assertions
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(data, 'Welcome john_doe');
        done();
      });
    });

    // Handle request error
    req.on('error', (e) => {
      done(e);
    });

    // Write payload to request body and end the request
    req.write(payload);
    req.end();
  });
});

// Test the /available_payments endpoint
describe('/available_payments', () => {
  it('should return payment methods with status 200', (done) => {
    http.get(PAYMENTS_URL, (res) => {
      let data = '';

      // Accumulate response data
      res.on('data', (chunk) => {
        data += chunk;
      });

      // On end of response
      res.on('end', () => {
        // Parse JSON data
        const response = JSON.parse(data);

        // Perform assertions
        assert.strictEqual(res.statusCode, 200);
        assert.deepStrictEqual(response, {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          }
        });
        done();
      });
    }).on('error', (e) => {
      done(e);
    });
  });
});


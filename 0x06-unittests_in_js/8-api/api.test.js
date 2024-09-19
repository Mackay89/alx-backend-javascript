const http = require('http');
const app = require('./api');

// Start the server before running tests
const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');

  // Define a simple test runner
  function runTests(tests) {
    let failures = 0;
    let promises = [];

    for (const [name, test] of tests) {
      console.log(`Running test: ${name}`);
      promises.push(
        test()
          .then(() => console.log(`\t✓ Passed`))
          .catch(error => {
            failures++;
            console.log(`\t✕ Failed: ${error.message}`);
          })
      );
    }

    Promise.all(promises).then(() => {
      console.log(`\n${failures} test(s) failed`);
      server.close(); // Close the server after tests
    });
  }

  // Define an assertion function for checking status codes
  function expectStatus(response, statusCode) {
    return new Promise((resolve, reject) => {
      if (response.statusCode !== statusCode) {
        reject(new Error(`Expected status ${statusCode}, but got ${response.statusCode}`));
      } else {
        resolve();
      }
    });
  }

  // Define an assertion function for checking response bodies
  function expectBody(response, expectedBody) {
    return new Promise((resolve, reject) => {
      let body = '';
      response.on('data', chunk => {
        body += chunk;
      });
      response.on('end', () => {
        if (body !== expectedBody) {
          reject(new Error(`Expected body "${expectedBody}", but got "${body}"`));
        } else {
          resolve();
        }
      });
    });
  }

  // Define the tests for the index page
  const indexTests = [
    ['Returns status code 200', () => {
      return new Promise((resolve, reject) => {
        http.get('http://localhost:7865', response => {
          expectStatus(response, 200)
            .then(resolve)
            .catch(reject);
        });
      });
    }],
    ['Returns the welcome message', () => {
      return new Promise((resolve, reject) => {
        http.get('http://localhost:7865', response => {
          expectStatus(response, 200)
            .then(() => expectBody(response, 'Welcome to the payment system'))
            .then(resolve)
            .catch(reject);
        });
      });
    }]
  ];

  // Run the tests for the index page
  console.log('Running tests for the index page:');
  runTests(indexTests);
});


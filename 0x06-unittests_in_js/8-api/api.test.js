const chai = require('chai');
const request = require('request');
const expect = chai.expect;
const server = require('./api');  // Assuming 'api.js' exports the Express app

describe('Index page', () => {
    let app; // Declare a variable to hold the server instance

    before((done) => {
        // Ensure only one instance of the server is started
        app = server.listen(7865, () => {
            console.log('Test server running on port 7865');
            done();
        });
    });

    after((done) => {
        // Properly close the server after tests are done
        if (app) {
            app.close(() => {
                console.log('Test server closed');
                done();
            });
        } else {
            done();
        }
    });

    it('should return correct status code', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct result', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});


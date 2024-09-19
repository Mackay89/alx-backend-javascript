/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
const { expect } = require('chai');
const assert = require('assert');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns a resolved promise with the object {data: "Successful response from the API"} when success is true', () => {
    return getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
      });
  });

  it('returns a rejected promise with an error message when success is false', () => {
    return getPaymentTokenFromAPI(false)
      .then(() => {
        // Fail the test if promise resolves
        assert.fail('Expected promise to be rejected');
      })
      .catch((err) => {
        expect(err.message).to.equal('Error: API call failed');
      });
  });
});


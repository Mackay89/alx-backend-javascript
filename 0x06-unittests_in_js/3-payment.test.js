/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable prefer-destructuring */

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber method of Utils with correct arguments', () => {
    // Create a spy on the calculateNumber method of Utils
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function to test
    sendPaymentRequestToApi(100, 20);

    // Check if calculateNumber was called with 'SUM', 100, and 20
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Check if calculateNumber was called exactly once
    expect(calculateNumberSpy.callCount).to.equal(1);

    // Restore the original method
    calculateNumberSpy.restore();
  });
});


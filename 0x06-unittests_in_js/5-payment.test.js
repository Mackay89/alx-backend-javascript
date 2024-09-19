const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log the total amount correctly', () => {
    const totalAmount = 100;
    const totalShipping = 20;
    const expectedSum = totalAmount + totalShipping;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith(`The total is: ${expectedSum}`)).to.be.true;
  });
});


const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consolespy;

  beforeEach(() => {
    consolespy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consolespy.restore();
  });

  it('should log the total is: 120 when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consolespy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consolespy.calledOnce).to.be.true;
  });

  it('should log the total is: 20 when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consolespy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consolespy.calledOnce).to.be.true;
  });
});


const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let funcStub;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
    funcStub = sinon.stub(utils, 'calculateNumber');
  });

  afterEach(() => {
    consoleSpy.restore();
    funcStub.restore();
  });

  it('should log the total correctly', () => {
    funcStub.returns(10); // Stub the calculateNumber function

    const reqApi = sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;
    expect(reqApi).to.equal(10);
    expect(funcStub.calledWith('SUM', 100, 20)).to.be.true;
  });
});


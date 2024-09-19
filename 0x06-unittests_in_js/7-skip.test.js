const { expect } = require('chai');

describe('Testing numbers', () => {
  it('should confirm 1 is equal to 1', () => {
    expect(1).to.equal(1);
  });

  it('should confirm 2 is equal to 2', () => {
    expect(2).to.equal(2);
  });

  // Skipping this test as it is expected to fail
  it.skip('should confirm 1 is equal to 3', () => {
    expect(1).to.equal(3);
  });

  it('should confirm 3 is equal to 3', () => {
    expect(3).to.equal(3);
  });

  it('should confirm 4 is equal to 4', () => {
    expect(4).to.equal(4);
  });

  it('should confirm 5 is equal to 5', () => {
    expect(5).to.equal(5);
  });

  it('should confirm 6 is equal to 6', () => {
    expect(6).to.equal(6);
  });

  it('should confirm 7 is equal to 7', () => {
    expect(7).to.equal(7);
  });
});


const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('test the API', () => {
  it('returns status code 200 for the index', (done) => {
    request('http://localhost:7865', (er, rs, bd) => {
      if (er) return done(er);
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('returns status code 200 for cart/3', (done) => {
    request('http://localhost:7865/cart/3', (er, rs, bd) => {
      if (er) return done(er);
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Payment methods for cart 3');
      done();
    });
  });

  it('returns status code 200 for cart/234', (done) => {
    request('http://localhost:7865/cart/234', (er, rs, bd) => {
      if (er) return done(er);
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Payment methods for cart 234');
      done();
    });
  });

  it('returns status code 404 for cart/abc', (done) => {
    request('http://localhost:7865/cart/abc', (er, rs) => {
      if (er) return done(er);
      expect(rs.statusCode).to.equal(404);
      done();
    });
  });

  it('returns status code 404 for cart/2bc', (done) => {
    request('http://localhost:7865/cart/2bc', (er, rs) => {
      if (er) return done(er);
      expect(rs.statusCode).to.equal(404);
      done();
    });
  });

  it('returns status code 404 for cart/23a', (done) => {
    request('http://localhost:7865/cart/23a', (er, rs) => {
      if (er) return done(er);
      expect(rs.statusCode).to.equal(404);
      done();
    });
  });

  it('returns status code 404 for cart without id', (done) => {
    request('http://localhost:7865/cart', (er, rs) => {
      if (er) return done(er);
      expect(rs.statusCode).to.equal(404);
      done();
    });
  });
});


const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const { expect } = chai;

chai.use(chaiHttp);

describe('API Endpoints', () => {
  describe('GET /available_payments', () => {
    it('should return the correct payment methods', (done) => {
      chai
        .request(app)
        .get('/available_payments')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          done();
        });
    });
  });

  describe('POST /login', () => {
    it('should return a welcome message with the username', (done) => {
      chai
        .request(app)
        .post('/login')
        .send({ userName: 'Betty' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome Betty');
          done();
        });
    });

    it('should return a 400 status code if userName is not provided', (done) => {
      chai
        .request(app)
        .post('/login')
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.text).to.equal('UserName is required');
          done();
        });
    });
  });
});


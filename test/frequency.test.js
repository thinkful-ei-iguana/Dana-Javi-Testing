const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../app');

describe('/GET frequency endpoint', () => {
  it('should return a object that counts a and b', () => {
    const query = { s: 'aaBBAAbbaa' };
    const expected = {
      count: 2,
      average: 5,
      highest: 'a',
      a: 6,
      b: 4
    };
    return supertest(app)
      .get('/frequency')
      .query(query)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.eql(expected);
      });
  });
});

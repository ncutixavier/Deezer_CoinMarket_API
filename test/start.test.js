const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responds with welcome', (done) => {
    request(app).get('/').expect('welcome you!', done);
  });
});

const request = require('supertest');
const server = require('./server');

describe('Server Testing', () => {
  it('check environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
  it('Responds with 200', async () => {
    return request(server)
      .get('/')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});

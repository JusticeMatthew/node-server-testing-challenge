const request = require('supertest');
const server = require('../server');
const db = require('../../data/dbConfig');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db('transformers').truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe('transformers model testing', () => {
  it('returns empty array if no transformers', async () => {
    const res = await request(server).get('/api/transformers');
    expect(res.body).toHaveLength(0);
  });
  it('autobots assemble', async () => {
    await db.seed.run('01-transformers');
    const res = await request(server).get('/api/transformers');
    expect(res.body).toHaveLength(3);
  });
});

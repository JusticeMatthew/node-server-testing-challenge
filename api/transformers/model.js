const db = require('../../data/dbConfig');

module.exports = {
  getAll,
  getById,
  create,
  remove,
};

function getAll() {
  return db('transformers');
}

function getById(id) {
  return db('transformers').where({ id }).first();
}

async function create(quote) {
  const [id] = await db('transformers').insert(quote);
  return getById(id);
}

function remove(id) {
  return db('transformers').where({ id }).del();
}

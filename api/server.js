const express = require('express');
const server = express();
const transformerRouter = require('./transformers/router');

server.use(express.json());
server.use('/api/transformers', transformerRouter);

server.get('/', (_, res) => {
  res.send('API IS UP DAWG');
});

server.use('*', (_, res) => {
  res.status(404).json({ message: '404 Not found' });
});

module.exports = server;

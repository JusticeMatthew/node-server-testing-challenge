require('dotenv').config();
const server = require('./api/server');

const PORT = process.env.NODE_ENV || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

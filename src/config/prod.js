const dotenv = require('dotenv');
dotenv.config();

const config = {
  host: process.env.PROD_HOST,
  prodDbUrl: process.env.PROD_DATABASE_URL,
};

module.exports = { config };

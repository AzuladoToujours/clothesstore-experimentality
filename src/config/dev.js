const dotenv = require('dotenv');
dotenv.config();

const config = {
  host: process.env.DEV_HOST,
  devDbUrl: process.env.DEV_DATABASE_URL,
  bucket: process.env.DEV_BUCKET,
};

module.exports = { config };

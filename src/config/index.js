const { merge } = require('lodash');
const dotenv = require('dotenv');
dotenv.config();
const env = process.env.ENV || 'dev';

const baseConfig = {
  env,
  isDev: env === 'dev',
  isProd: env === 'prod',
  testDbUrl: process.env.TEST_DATABASE_URL,
  port: process.env.PORT || 5000,
};

let envConfig = {};

switch (env) {
  case 'dev':
    envConfig = require('./dev').config;
    break;
  case 'prod':
    envConfig = require('./prod').config;
    break;
  default:
    envConfig = require('./dev').config;
}

const configs = merge(baseConfig, envConfig);

module.exports = { configs };

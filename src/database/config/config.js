const { configs } = require('../../config/index');

module.exports = {
  production: {
    url: configs.prodDbUrl,
    dialect: 'postgres',
    logging: false,
  },
  development: {
    url: configs.devDbUrl,
    dialect: 'postgres',
  },
  test: {
    url: configs.testDbUrl,
    dialect: 'postgres',
  },
};

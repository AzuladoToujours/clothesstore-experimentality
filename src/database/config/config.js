const { configs } = require('../../config/index');

module.exports = {
  development: {
    url: configs.devDbUrl,
    dialect: 'postgres',
  },
  test: {
    url: configs.testDbUrl,
    dialect: 'postgres',
  },
  production: {
    url: configs.prodDbUrl,
    dialect: 'postgres',
  },
};

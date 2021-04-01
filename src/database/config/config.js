const { configs } = require('../../config/index');

module.exports = {
  production: {
    url: configs.prodDbUrl,
    dialect: 'postgres',
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

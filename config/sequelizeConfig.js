// this seems to only work in cjs...
const path = require('path');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: path.join(__dirname, '../dev.sqlite'),
    database: 'dev',
    operatorsAliases: false,
  },
  test: {
    // TODO
    dialect: 'sqlite',
    storage: path.join(__dirname, '../dev.sqlite'),
    database: 'dev',
    operatorsAliases: false,
  },
  production: {
    // TODO
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'mysql',
    operatorsAliases: false,
  },
};

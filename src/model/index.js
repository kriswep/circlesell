// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import allConfs from '../../config/sequelizeConfig';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = allConfs[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// debugger; // eslint-disable-line
fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .filter(file => file.indexOf('test') < 0 && file.indexOf('connectors') < 0)
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.sequelize.sync();

export default db;

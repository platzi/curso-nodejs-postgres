const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
}

if (config.isProd) {
  options.ssl = {
    rejectUnauthorized: false
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize;

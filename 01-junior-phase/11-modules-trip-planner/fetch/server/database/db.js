const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/fetch-dogs', {
  logging: false
});

module.exports = db;

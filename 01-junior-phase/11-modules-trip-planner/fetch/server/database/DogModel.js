const Sequelize = require('sequelize');
const db = require('./db');

const Dog = db.define('dog', {
  name: Sequelize.STRING,
  image: Sequelize.STRING
});

module.exports = Dog;

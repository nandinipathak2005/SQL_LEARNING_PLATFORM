const { Sequelize } = require('sequelize');

const gameDB = new Sequelize('hidden_symphony_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false
  }
});
module.exports = gameDB;
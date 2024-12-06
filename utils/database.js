const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('finalproject', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }
});

module.exports = sequelize;

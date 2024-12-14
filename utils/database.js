const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('backend', 'root', '', {
host: 'localhost',
dialect: 'mysql',
define: {
      timestamps: false,
      createdAt: false,
      updatedAt: false
        }
});

module.exports = sequelize;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/sotaso-backend-db');

const Category = sequelize.define('Category', {
    CategoryID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    CategoryName: { type: DataTypes.STRING, allowNull: false },
    Description: { type: DataTypes.TEXT },
    Picture: { type: DataTypes.BLOB },
});

module.exports = Category;

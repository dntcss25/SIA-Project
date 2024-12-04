const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Category = sequelize.define('Category', {
  CategoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'CategoryID'
  },
  CategoryName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'CategoryName'
  },
  Description: {
    type: DataTypes.STRING,
    field: 'Description'
  },
  Picture: {
    type: DataTypes.BLOB,
    field: 'Picture'
  }
}, {
  tableName: 'categories',
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Category;


const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Category = sequelize.define('Category', {
  CategoryID: {
    type: DataTypes.INTEGER(187),
    primaryKey: true,
    autoIncrement: true,
    field: 'CategoryID'
  },
  CategoryName: {
    type: DataTypes.STRING(187),
    field: 'CategoryName'
  },
  Description: {
    type: DataTypes.STRING(187),
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
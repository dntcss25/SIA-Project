const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Product = sequelize.define('Product', {
  ProductID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'ProductID'
  },
  ProductName: {
    type: DataTypes.STRING,
    field: 'ProductName'
  },
  SupplierID: {
    type: DataTypes.INTEGER,
    field: 'SupplierID'
  },
  CategoryID: {
    type: DataTypes.INTEGER,
    field: 'CategoryID'
  },
  QuantityPerUnit: {
    type: DataTypes.STRING,
    field: 'QuantityPerUnit'
  },
  UnitPrice: {
    type: DataTypes.DECIMAL(10, 4),
    field: 'UnitPrice'
  },
  UnitsInStock: {
    type: DataTypes.SMALLINT,
    field: 'UnitsInStock'
  },
  UnitsOnOrder: {
    type: DataTypes.SMALLINT,
    field: 'UnitsOnOrder'
  },
  ReorderLevel: {
    type: DataTypes.SMALLINT,
    field: 'ReorderLevel'
  },
  Discontinued: {
    type: DataTypes.BOOLEAN,
    field: 'Discontinued'
  }
}, {
  tableName: 'products',
  timestamps: false
});

module.exports = Product;

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Order = sequelize.define('Order', {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'OrderID'
  },
  CustomerID: {
    type: DataTypes.STRING,
    field: 'CustomerID'
  },
  EmployeeID: {
    type: DataTypes.INTEGER,
    field: 'EmployeeID'
  },
  OrderDate: {
    type: DataTypes.DATE,
    field: 'OrderDate'
  },
  RequiredDate: {
    type: DataTypes.DATE,
    field: 'RequiredDate'
  },
  ShippedDate: {
    type: DataTypes.DATE,
    field: 'ShippedDate'
  },
  ShipVia: {
    type: DataTypes.INTEGER,
    field: 'ShipVia'
  },
  Freight: {
    type: DataTypes.DECIMAL(10, 4),
    field: 'Freight'
  },
  ShipName: {
    type: DataTypes.STRING,
    field: 'ShipName'
  },
  ShipAddress: {
    type: DataTypes.STRING,
    field: 'ShipAddress'
  },
  ShipCity: {
    type: DataTypes.STRING,
    field: 'ShipCity'
  },
  ShipRegion: {
    type: DataTypes.STRING,
    field: 'ShipRegion'
  },
  ShipPostalCode: {
    type: DataTypes.STRING,
    field: 'ShipPostalCode'
  },
  ShipCountry: {
    type: DataTypes.STRING,
    field: 'ShipCountry'
  }
}, {
  tableName: 'orders',
  timestamps: false
});

module.exports = Order;


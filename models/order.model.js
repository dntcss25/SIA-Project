const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Order = sequelize.define('Order', {
  OrderID: {
    type: DataTypes.INTEGER(214),
    primaryKey: true,
    autoIncrement: true,
    field: 'OrderID'
  },
  CustomerID: {
    type: DataTypes.STRING(214),
    field: 'CustomerID'
  },
  EmployeeID: {
    type: DataTypes.INTEGER(214),
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
    type: DataTypes.INTEGER(214),
    field: 'ShipVia'
  },
  Freight: {
    type: DataTypes.DECIMAL(10, 7),
    field: 'Freight'
  },
  ShipName: {
    type: DataTypes.STRING(214),
    field: 'ShipName'
  },
  ShipAddress: {
    type: DataTypes.STRING(214),
    field: 'ShipAddress'
  },
  ShipCity: {
    type: DataTypes.STRING(214),
    field: 'ShipCity'
  },
  ShipRegion: {
    type: DataTypes.STRING(214),
    field: 'ShipRegion'
  },
  ShipPostalCode: {
    type: DataTypes.STRING(214),
    field: 'ShipPostalCode'
  },
  ShipCountry: {
    type: DataTypes.STRING(214),
    field: 'ShipCountry'
  }
}, {
  tableName: 'orders',
  timestamps: false
});

module.exports = Order;
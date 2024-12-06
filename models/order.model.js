const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Order = sequelize.define('Order', {
  OrderID: {
    type: DataTypes.INTEGER(187),
    primaryKey: true,
    autoIncrement: true,
    field: 'OrderID'
  },
  CustomerID: {
    type: DataTypes.STRING(187),
    field: 'CustomerID'
  },
  EmployeeID: {
    type: DataTypes.INTEGER(187),
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
    type: DataTypes.INTEGER(187),
    field: 'ShipVia'
  },
  Freight: {
    type: DataTypes.DECIMAL(15, 5),
    field: 'Freight'
  },
  ShipName: {
    type: DataTypes.STRING(187),
    field: 'ShipName'
  },
  ShipAddress: {
    type: DataTypes.STRING(187),
    field: 'ShipAddress'
  },
  ShipCity: {
    type: DataTypes.STRING(187),
    field: 'ShipCity'
  },
  ShipRegion: {
    type: DataTypes.STRING(187),
    field: 'ShipRegion'
  },
  ShipPostalCode: {
    type: DataTypes.STRING(187),
    field: 'ShipPostalCode'
  },
  ShipCountry: {
    type: DataTypes.STRING(187),
    field: 'ShipCountry'
  }
}, {
  tableName: 'orders',
  timestamps: false
});

module.exports = Order;
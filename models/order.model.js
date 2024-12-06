const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Order = sequelize.define('Order', {
  OrderID: {
    type: DataTypes.INTEGER(255),
    primaryKey: true,
    autoIncrement: true,
    field: 'OrderID'
  },
  CustomerID: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'CustomerID'
  },
  EmployeeID: {
    type: DataTypes.INTEGER(255),
    allowNull: true,
    field: 'EmployeeID'
  },
  OrderDate: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'OrderDate'
  },
  RequiredDate: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'RequiredDate'
  },
  ShippedDate: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'ShippedDate'
  },
  ShipVia: {
    type: DataTypes.INTEGER(255),
    allowNull: true,
    field: 'ShipVia'
  },
  Freight: {
    type: DataTypes.DECIMAL(15, 5),
    allowNull: true,
    field: 'Freight'
  },
  ShipName: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'ShipName'
  },
  ShipAddress: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'ShipAddress'
  },
  ShipCity: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'ShipCity'
  },
  ShipRegion: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'ShipRegion'
  },
  ShipPostalCode: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'ShipPostalCode'
  },
  ShipCountry: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'ShipCountry'
  }
}, {
  tableName: 'orders',
  timestamps: false
});

module.exports = Order;
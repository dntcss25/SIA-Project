const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Shipper = sequelize.define('Shipper', {
  ShipperID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'ShipperID'
  },
  CompanyName: {
    type: DataTypes.STRING,
    field: 'CompanyName'
  },
  Phone: {
    type: DataTypes.STRING,
    field: 'Phone'
  }
}, {
  tableName: 'shippers',
  timestamps: false
});

module.exports = Shipper;
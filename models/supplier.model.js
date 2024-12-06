const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Supplier = sequelize.define('Supplier', {
  SupplierID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'SupplierID'
  },
  CompanyName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'CompanyName'
  },
  ContactName: {
    type: DataTypes.STRING,
    field: 'ContactName'
  },
  ContactTitle: {
    type: DataTypes.STRING,
    field: 'ContactTitle'
  },
  Address: {
    type: DataTypes.STRING,
    field: 'Address'
  },
  City: {
    type: DataTypes.STRING,
    field: 'City'
  },
  Region: {
    type: DataTypes.STRING,
    field: 'Region'
  },
  PostalCode: {
    type: DataTypes.STRING,
    field: 'PostalCode'
  },
  Country: {
    type: DataTypes.STRING,
    field: 'Country'
  },
  Phone: {
    type: DataTypes.STRING,
    field: 'Phone'
  },
  Fax: {
    type: DataTypes.STRING,
    field: 'Fax'
  },
  HomePage: {
    type: DataTypes.TEXT,
    field: 'HomePage'
  }
}, {
  tableName: 'suppliers',
  timestamps: false
});

module.exports = Supplier;
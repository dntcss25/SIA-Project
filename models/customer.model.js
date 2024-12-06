const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Customer = sequelize.define('Customer', {
  CustomerID: {
    type: DataTypes.INTEGER(255),
    primaryKey: true,
    autoIncrement: true,
    field: 'CustomerID'
  },
  CompanyName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'CompanyName'
  },
  ContactName: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'ContactName'
  },
  ContactTitle: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'ContactTitle'
  },
  Address: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'Address'
  },
  City: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'City'
  },
  Region: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'Region'
  },
  PostalCode: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'PostalCode'
  },
  Country: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'Country'
  },
  Phone: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'Phone'
  },
  Fax: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'Fax'
  }
}, {
  tableName: 'customers',
  timestamps: false
});

module.exports = Customer;

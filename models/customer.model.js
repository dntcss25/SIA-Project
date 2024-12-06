const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Customer = sequelize.define('Customer', {
  CustomerID: {
    type: DataTypes.INTEGER(214),
    primaryKey: true,
    autoIncrement: true,
    field: 'CustomerID'
  },
  CompanyName: {
    type: DataTypes.STRING(214),
    field: 'CompanyName'
  },
  ContactName: {
    type: DataTypes.STRING(214),
    field: 'ContactName'
  },
  ContactTitle: {
    type: DataTypes.STRING(214),
    field: 'ContactTitle'
  },
  Address: {
    type: DataTypes.STRING(214),
    field: 'Address'
  },
  City: {
    type: DataTypes.STRING(214),
    field: 'City'
  },
  Region: {
    type: DataTypes.STRING(214),
    field: 'Region'
  },
  PostalCode: {
    type: DataTypes.STRING(214),
    field: 'PostalCode'
  },
  Country: {
    type: DataTypes.STRING(214),
    field: 'Country'
  },
  Phone: {
    type: DataTypes.STRING(214),
    field: 'Phone'
  },
  Fax: {
    type: DataTypes.STRING(214),
    field: 'Fax'
  }
}, {
  tableName: 'customers',
  timestamps: false
});

module.exports = Customer;

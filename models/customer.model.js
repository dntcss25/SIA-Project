const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Customer = sequelize.define('Customer', {
  CustomerID: {
    type: DataTypes.INTEGER(187),
    primaryKey: true,
    autoIncrement: true,
    field: 'CustomerID'
  },
  CompanyName: {
    type: DataTypes.STRING(187),
    field: 'CompanyName'
  },
  ContactName: {
    type: DataTypes.STRING(187),
    field: 'ContactName'
  },
  ContactTitle: {
    type: DataTypes.STRING(187),
    field: 'ContactTitle'
  },
  Address: {
    type: DataTypes.STRING(187),
    field: 'Address'
  },
  City: {
    type: DataTypes.STRING(187),

    field: 'City'
  },
  Region: {
    type: DataTypes.STRING(187),
    field: 'Region'
  },
  PostalCode: {
    type: DataTypes.STRING(187),
    field: 'PostalCode'
  },
  Country: {
    type: DataTypes.STRING(187),
    field: 'Country'
  },
  Phone: {
    type: DataTypes.STRING(187),
    field: 'Phone'
  },
  Fax: {
    type: DataTypes.STRING(187),
 
    field: 'Fax'
  }
}, {
  tableName: 'customers',
  timestamps: false
});

module.exports = Customer;

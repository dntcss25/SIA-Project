const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Customer = sequelize.define('Customer', {
  CustomerID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'CustomerID'
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
  }
}, {
  tableName: 'customers',
  timestamps: false
});

module.exports = Customer;


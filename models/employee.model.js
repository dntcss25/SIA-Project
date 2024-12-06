const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Employee = sequelize.define('Employee', {
  EmployeeID: {
    type: DataTypes.INTEGER(255),
    primaryKey: true,
    autoIncrement: true,
    field: 'EmployeeID'
  },
  LastName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'LastName'
  },
  FirstName: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'FirstName'
  },
  Title: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'Title'
  },
  TitleOfCourtesy: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'TitleOfCourtesy'
  },
  BirthDate: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'BirthDate'
  },
  HireDate: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'HireDate'
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
  HomePhone: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'HomePhone'
  },
  Extension: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'Extension'
  },
  Photo: {
    type: DataTypes.BLOB,
    allowNull: true,
    field: 'Photo'
  },
  Notes: {
    type: DataTypes.TEXT(255),
    allowNull: true,
    field: 'Notes'
  },
  ReportsTo: {
    type: DataTypes.INTEGER(255),
    allowNull: true,
    field: 'ReportsTo'
  }
}, {
  tableName: 'employees',
  timestamps: false
});

module.exports = Employee;
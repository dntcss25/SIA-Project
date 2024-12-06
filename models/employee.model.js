const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Employee = sequelize.define('Employee', {
  EmployeeID: {
    type: DataTypes.INTEGER(214),
    primaryKey: true,
    autoIncrement: true,
    field: 'EmployeeID'
  },
  LastName: {
    type: DataTypes.STRING(214),
    field: 'LastName'
  },
  FirstName: {
    type: DataTypes.STRING(214),
    field: 'FirstName'
  },
  Title: {
    type: DataTypes.STRING(214),
    field: 'Title'
  },
  TitleOfCourtesy: {
    type: DataTypes.STRING(214),
    field: 'TitleOfCourtesy'
  },
  BirthDate: {
    type: DataTypes.DATE,
    field: 'BirthDate'
  },
  HireDate: {
    type: DataTypes.DATE,
    field: 'HireDate'
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
  HomePhone: {
    type: DataTypes.STRING(214),
    field: 'HomePhone'
  },
  Extension: {
    type: DataTypes.STRING(214),
    field: 'Extension'
  },
  Photo: {
    type: DataTypes.BLOB,
    field: 'Photo'
  },
  Notes: {
    type: DataTypes.TEXT(214),
    field: 'Notes'
  },
  ReportsTo: {
    type: DataTypes.INTEGER(214),
    field: 'ReportsTo'
  }
}, {
  tableName: 'employees',
  timestamps: false
});

module.exports = Employee;

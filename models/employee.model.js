const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Employee = sequelize.define('Employee', {
  EmployeeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'EmployeeID'
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'LastName'
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'FirstName'
  },
  Title: {
    type: DataTypes.STRING,
    field: 'Title'
  },
  TitleOfCourtesy: {
    type: DataTypes.STRING,
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
  HomePhone: {
    type: DataTypes.STRING,
    field: 'HomePhone'
  },
  Extension: {
    type: DataTypes.STRING,
    field: 'Extension'
  },
  Photo: {
    type: DataTypes.BLOB,
    field: 'Photo'
  },
  Notes: {
    type: DataTypes.TEXT,
    field: 'Notes'
  },
  ReportsTo: {
    type: DataTypes.INTEGER,
    field: 'ReportsTo'
  }
}, {
  tableName: 'employees',
  timestamps: false
});

module.exports = Employee;


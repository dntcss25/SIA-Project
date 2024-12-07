const DataType = require('sequelize');
const sequelize = require('../utils/database');


    const Employees = sequelize.define('Employees', {
        EmployeeID: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        LastName: {
            type: DataType.STRING,
            allowNull: true
        },
        FirstName: {
            type: DataType.STRING,
            allowNull: true,
        },
        Title: {
            type: DataType.STRING,
            allowNull: true,
        },
        TitleOfCourtesy: {
            type: DataType.STRING,
            allowNull: true,
        },
        BirthDate: {
            type: DataType.DATE,
            allowNull: true,
        },
        HireDate: {
            type: DataType.DATE,
            allowNull: true,
        },
        PostalCode: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        Country: {
            type: DataType.STRING,
            allowNull: true,
        },
        HomePhone: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        Extension: {
            type: DataType.STRING,
            allowNull: true,
        },
        Photo: {
            type: DataType.BLOB,
            allowNull: true,
        },
        Notes: {
            type: DataType.STRING,
            allowNull: true,
        },
        ReportsTo: {
            type: DataType.STRING,
            allowNull: true,
        },
        createdAt: {
            type: DataType.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: DataType.DATE,
            allowNull: true,
        },
        
        
        
    }, {
        tableName: 'employees' 
    });
module.exports = Employees;

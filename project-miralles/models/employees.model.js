const { DataTypes } = require('sequelize'); 
const sequelize = require('../utils/database');  
   
    const Employee = sequelize.define('employees', {
        EmployeeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Title: {
            type: DataTypes.STRING
        },
        TitleOfCourtesy: {
            type: DataTypes.STRING
        },
        BirthDate: {
            type: DataTypes.DATE
        },
        HireDate: {
            type: DataTypes.DATE
        },
        Address: {
            type: DataTypes.STRING
        },
        City: {
            type: DataTypes.STRING
        },
        Region: {
            type: DataTypes.STRING
        },
        PostalCode: {
            type: DataTypes.STRING
        },
        Country: {
            type: DataTypes.STRING
        },
        HomePhone: {
            type: DataTypes.STRING
        },
        Extension: {
            type: DataTypes.STRING
        },
        Photo: {
            type: DataTypes.BLOB
        },
        Notes: {
            type: DataTypes.TEXT
        },
        ReportsTo: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'employees',
        timestamps: false
    });

    module.exports = Employee;

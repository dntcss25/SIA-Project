const DataType = require('sequelize');
const sequelize = require('../utils/database');


    const Customers = sequelize.define('Customers', {
        CustomerID: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        CompanyName: {
            type: DataType.STRING,
            allowNull: true
        },
        ContactName: {
            type: DataType.STRING,
            allowNull: true,
        },
        ContactTitle: {
            type: DataType.STRING,
            allowNull: true,
        },
        Address: {
            type: DataType.STRING,
            allowNull: true,
        },
        City: {
            type: DataType.STRING,
            allowNull: true,
        },
        Region: {
            type: DataType.STRING,
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
        Phone: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        Fax: {
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
        tableName: 'customers' 
    });
module.exports = Customers;

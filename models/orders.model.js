const DataType = require('sequelize');
const sequelize = require('../utils/database');


    const Orders = sequelize.define('Orders', {
        OrderID: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        CustomerID: {
            type: DataType.INTEGER,
            indexKey: true,
            allowNull: true
        },
        EmployeeID: {
            type: DataType.INTEGER,
            indexKey: true,
            allowNull: true,
        },
        OrderDate: {
            type: DataType.TIME,
            allowNull: true,
        },
        RequiredDate: {
            type: DataType.DATE,
            allowNull: true,
        },
        ShippedDate: {
            type: DataType.DATE,
            allowNull: true,
        },
        ShipVia: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        Freight: {
            type: DataType.STRING,
            allowNull: true,
        },
        ShipName: {
            type: DataType.STRING,
            allowNull: true,
        },
        ShipAddress: {
            type: DataType.STRING,
            allowNull: true,
        },
        ShipCity: {
            type: DataType.STRING,
            allowNull: true,
        },
        ShipRegion: {
            type: DataType.STRING,
            allowNull: true,
        },
        ShipPostalCode: {
            type: DataType.STRING,
            allowNull: true,
        },
        ShipCountry: {
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
        tableName: 'orders' 
    });
module.exports = Orders;

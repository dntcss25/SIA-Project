const { DataTypes } = require('sequelize');  
const sequelize = require('../utils/database');  
 
    const Order = sequelize.define('orders', {
        OrderID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CustomerID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        EmployeeID: {
            type: DataTypes.INTEGER
        },
        OrderDate: {
            type: DataTypes.DATE
        },
        RequiredDate: {
            type: DataTypes.DATE
        },
        ShippedDate: {
            type: DataTypes.DATE
        },
        ShipVia: {
            type: DataTypes.INTEGER
        },
        Freight: {
            type: DataTypes.DECIMAL(10, 2)
        },
        ShipName: {
            type: DataTypes.STRING
        },
        ShipAddress: {
            type: DataTypes.STRING
        },
        ShipCity: {
            type: DataTypes.STRING
        },
        ShipRegion: {
            type: DataTypes.STRING
        },
        ShipPostalCode: {
            type: DataTypes.STRING
        },
        ShipCountry: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'orders',
        timestamps: false
    });

    module.exports = Order;

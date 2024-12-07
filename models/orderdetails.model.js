const DataType = require('sequelize');
const sequelize = require('../utils/database');


    const OrderDetails = sequelize.define('OrderDetails', {
        OrderID: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        ProductID: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        UnitPrice: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        Quantity: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        Discount: {
            type: DataType.INTEGER,
            allowNull: true,
        },createdAt: {
            type: DataType.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: DataType.DATE,
            allowNull: true,
        },
        
        
        
    }, {
        tableName: 'order details' 
    });
module.exports = OrderDetails;

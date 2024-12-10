const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); 

const OrderDetail = sequelize.define('OrderDetail', {
    OrderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    UnitPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            isDecimal: true,
        },
    },
    Discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            isFloat: true,
        },
    },
    
}, {
    tableName: 'orderdetails',
    timestamps: false, 
});

module.exports = OrderDetail;

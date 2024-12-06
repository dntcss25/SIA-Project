const { DataTypes } = require('sequelize'); 
const sequelize = require('../utils/database');  
   
    const OrderDetail = sequelize.define('orderdetails', {
        OrderID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        ProductID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        UnitPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Discount: {
            type: DataTypes.DECIMAL(5, 2),
            defaultValue: 0
        }
    }, {
        tableName: 'orderdetails',
        timestamps: false
    });

    module.exports = OrderDetail;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); 

const OrderDetail = sequelize.define('OrderDetail', {
    OrderID: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
    },
    ProductID: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
    },
    Quantity: {  
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    UnitPrice: {  
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Discount: {  
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
    },
}, {
    tableName: 'orderdetails',
    timestamps: false, 
    
    id: false,
    indexes: [
        {
            unique: true,
            fields: ['OrderID', 'ProductID']  
        }
    ]
});

module.exports = OrderDetail;

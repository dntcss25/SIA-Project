const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const Order = require('./orders.model'); 
const Product = require('./products.model'); 
const OrderDetail = sequelize.define('OrderDetail', {
    OrderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Order, 
            key: 'OrderID'
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE'  
    },
    ProductID: {
        type: DataTypes.INTEGER,
        references: {
            model: Product, 
            key: 'ProductID'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    UnitPrice: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: true
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Discount: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: true
    }
}, {
    tableName: 'order details',
    timestamps: false
});

// Define relationships
OrderDetail.belongsTo(Order, { foreignKey: 'OrderID' });
Order.hasMany(OrderDetail, { foreignKey: 'OrderID' });

OrderDetail.belongsTo(Product, { foreignKey: 'ProductID' });
Product.hasMany(OrderDetail, { foreignKey: 'ProductID' });

module.exports = OrderDetail;

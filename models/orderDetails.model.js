const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
// Import the Order and Product models
const Order = require('./orders.model');
const Product = require('./products.model');

const OrderDetail = sequelize.define('OrderDetail', {
    // Reference the Orders table
    OrderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Order,
            key: 'OrderID'
        },
        onDelete: 'CASCADE', // Ensure deletions of the referenced key propagate
        onUpdate: 'CASCADE'  // Ensure updates of the referenced key propagate
    },
    // Reference the Products table
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

// Define the relationships between the OrderDetail, Order, and Product models
OrderDetail.belongsTo(Order, { foreignKey: 'OrderID' });
Order.hasMany(OrderDetail, { foreignKey: 'OrderID' });

OrderDetail.belongsTo(Product, { foreignKey: 'ProductID' });
Product.hasMany(OrderDetail, { foreignKey: 'ProductID' });

module.exports = OrderDetail;
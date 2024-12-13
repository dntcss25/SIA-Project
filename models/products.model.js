const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Product = sequelize.define('Product', {
    ProductID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ProductName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    // Reference the Suppliers table
    SupplierID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'suppliers',
            key: 'SupplierID'
        }
    },
    // Reference the Categories table
    CategoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'CategoryID'
        }
    },
    QuantityPerUnit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UnitPrice: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false
    },
    UnitsInStock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UnitsOnOrder: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    ReorderLevel: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    Discontinued: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
 
}, {
    tableName: 'products',
    paranoid: true
});

module.exports = Product;
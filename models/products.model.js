const DataType = require('sequelize');
const sequelize = require('../utils/database');


    const Products = sequelize.define('Products', {
        ProductID: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ProductName: {
            type: DataType.STRING,
            allowNull: true
        },
        SupplierID: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        CategoryID: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        QuantityPerUnit	: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        UnitPrice: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        UnitsInStock: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        UnitsOnOrder: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        ReorderLevel: {
            type: DataType.STRING,
            allowNull: true,
        },
        Discontinued: {
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
        tableName: 'products' 
    });
module.exports = Products;

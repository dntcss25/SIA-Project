const { DataTypes } = require('sequelize');  
const sequelize = require('../utils/database');  
  
    const Product = sequelize.define('products', {
        ProductID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ProductName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        SupplierID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        CategoryID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        QuantityPerUnit: {
            type: DataTypes.STRING
        },
        UnitPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        UnitsInStock: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        UnitsOnOrder: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        ReorderLevel: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        Discontinued: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'products',
        timestamps: false
    });
 
    module.exports = Product;
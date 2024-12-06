const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); 

const Product = sequelize.define('Product', {
    ProductID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    CategoryID: { 
        type: DataTypes.STRING,
        allowNull: true,
    },
    Discontinued: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ProductName: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    QuantityPerUnit: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ReorderLevel: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    SupplierID: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    UnitPrice: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    UnitsInStock: {  
        type: DataTypes.STRING,
        allowNull: false,  
    },
    UnitsOnOrder: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'products',  
    timestamps: false,  
});

module.exports = Product;

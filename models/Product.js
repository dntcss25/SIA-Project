const { DataTypes } = require('sequelize');
const sequelize = require('../config/sotaso-backend-db'); 
const Supplier = require('./Supplier'); 
const Category = require('./Category'); 

// Define the Product model
const Product = sequelize.define('Product', {
    ProductID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ProductName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SupplierID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Supplier,
            key: 'SupplierID', 
        },
    },
    CategoryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'CategoryID',
        },
    },
    QuantityPerUnit: {
        type: DataTypes.STRING,
    },
    UnitPrice: {
        type: DataTypes.DECIMAL(10, 2),
    },
    UnitInStock: {
        type: DataTypes.INTEGER,
    },
    UnitInOrder: {
        type: DataTypes.INTEGER,
    },
    ReorderLevel: {
        type: DataTypes.INTEGER,
    },
    Discontinued: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    timestamps: false, 
    tableName: 'products', 
});

// Define associations
Product.belongsTo(Supplier, {
    foreignKey: 'SupplierID',
    as: 'Supplier', 
});
Product.belongsTo(Category, {
    foreignKey: 'CategoryID',
    as: 'Category', 
});

// Export the model
module.exports = Product;

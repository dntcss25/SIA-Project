const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); 

const Supplier = sequelize.define('Supplier', {
    SupplierID: {  
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    PostalCode: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Phone: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    HomePage: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Fax: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Country: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ContactTitle: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ContactName: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    CompanyName: {  
        type: DataTypes.STRING,
        allowNull: false,  
    },
    City: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Address: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'suppliers',  
    timestamps: false,  
});

module.exports = Supplier;

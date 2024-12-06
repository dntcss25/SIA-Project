const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); 

const Customer = sequelize.define('Customer', {
    CustomerID: {  
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Address: {  
        type: DataTypes.STRING,
        allowNull: true, 
    },
    City: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    CompanyName: {  
        type: DataTypes.STRING,
        allowNull: false, 
    },
    ContactName: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    ContactTitle: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Country: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Fax: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Phone: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    PostalCode: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Region: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'customers',  
    timestamps: false, 
});

module.exports = Customer;

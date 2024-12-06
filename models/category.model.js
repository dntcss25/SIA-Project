const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); 

const Category = sequelize.define('Category', {
    CategoryID: {  
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    CategoryName: {  
        type: DataTypes.STRING,
        allowNull: false, 
    },
    Description: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
    Picture: {  
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'categories',  
    timestamps: false,  
});

module.exports = Category;

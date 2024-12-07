const DataType = require('sequelize');
const sequelize = require('../utils/database');


    const Categories = sequelize.define('Categories', {
        CategoryID: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        CategoryName: {
            type: DataType.STRING,
            allowNull: true
        },
        Description: {
            type: DataType.STRING,
            allowNull: true,
        },
        Picture: {
            type: DataType.BLOB,
            allowNull: true,
        },
        createdAt: {
            type: DataType.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: DataType.DATE,
            allowNull: true,
        },
        
        
        
    }, {
        tableName: 'categories' 
    });
module.exports = Categories;

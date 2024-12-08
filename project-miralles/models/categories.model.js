const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Category = sequelize.define('Category', {
    CategoryID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CategoryName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    Picture: {
        type: DataTypes.BLOB,
        allowNull: true
    }
}, {
    tableName: 'categories',
    timestamps: false
});

module.exports = Category;

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database'); // Adjust the path if necessary

const Category = sequelize.define('Category', {
    CategoryID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CategoryName: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    Picture: {
        type: DataTypes.TEXT('long'),
        allowNull: true,
        validate: {
            isJson(value) {
                if (!isValidJson(value)) {
                    throw new Error('Invalid JSON format');
                }
            }
        }
    }
}, {
    tableName: 'categories',
    timestamps: false // Assuming no timestamps for this table
});

function isValidJson(value) {
    try {
        JSON.parse(value);
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = Category;

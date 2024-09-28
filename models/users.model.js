const DataType = require('sequelize');
const sequelize = require('../utils/database');
//module.exports = (DataTypes , sequelize) => {
    const User = sequelize.define('users', {
        _id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataType.STRING,
            allowNull: true
        },
        email: {
            type: DataType.STRING,
            allowNull: true
        },
        password: {
            type: DataType.STRING,
            allowNull: true,
        },
        studentId: {
            type: DataType.INTEGER,
            allowNull: true,
        },
        instructorId: {
            type: DataType.INTEGER,
            allowNull: true,
        },
    }, {
        tableName: 'profileusers' 
    });
module.exports = User;

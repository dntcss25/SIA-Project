const DataType = require('sequelize');
const sequelize = require('../utils/database');
//module.exports = (DataTypes , sequelize) => {
    const Instructors = sequelize.define('instructors', {
        _id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataType.STRING,
            allowNull: true
        },
        lastName: {
            type: DataType.STRING,
            allowNull: true
        },
        subject: {
            type: DataType.STRING,
            allowNull: true,
        },
        degree: {
            type: DataType.STRING,
            allowNull: true,
        },
        birthday: {
            type: DataType.DATE,
            allowNull: true,
        },
        email: {
            type: DataType.STRING,
            allowNull: true,
        },
        contact: {
            type: DataType.STRING,
            allowNull: true,
        },
        avatar: {
            type: DataType.JSON,
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
    })
module.exports = Instructors;

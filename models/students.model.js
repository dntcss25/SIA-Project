const DataType = require('sequelize');
const sequelize = require('../utils/database');

const Students = sequelize.define('students', {
    _id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    studentNo: {
        type: DataType.INTEGER,
        allowNull: true
    },
    firstName: {
        type: DataType.STRING,
        allowNull: true
    },
    lastName: {
        type: DataType.STRING,
        allowNull: true
    },
    email: {
        type: DataType.STRING,
        allowNull: true,
    },
    birthday: {
        type: DataType.DATE,
        allowNull: true,
    },
    gender: {
        type: DataType.STRING,
        allowNull: true,
    },
    address: {
        type: DataType.STRING,
        allowNull: true,
    },
    citizenship: {
        type: DataType.STRING,
        allowNull: true,
    },
    avatar: {
        type: DataType.JSON,
        allowNull: true,
    },
    contact: {
        type: DataType.STRING,
        allowNull: true,
    },
    civilStatus: {
        type: DataType.STRING,
        allowNull: true,
    },
    social: {
        type: DataType.STRING,
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

module.exports = Students;
/*const mysql2 = require('mysql2')
let connection = mysql2.createConnection({*/
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'shopingdb',
    dialect: 'mysql'
})

module.exports = sequelize;
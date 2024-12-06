const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'siadatabase',
    dialect: 'mysql'
})

module.exports = sequelize;
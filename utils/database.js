const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'final_project',
    dialect: 'mysql'
})

module.exports = sequelize;

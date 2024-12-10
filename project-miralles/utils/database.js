const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('order_system_db', 'root', '', {
    host: 'localhost',   
    dialect: 'mysql',
    logging: false,
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = sequelize;


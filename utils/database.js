const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize with the connection string to the database
const sequelize = new Sequelize('vina_project_db', 'root', '', {
    host: 'localhost',
    port: 3306, 
    dialect: 'mysql',
});

// Test the connection to the database
sequelize.authenticate()
    .then(() => console.log('Database connection established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err.message));

// Import all the models
sequelize.sync({ force: false })
    .then(() => console.log('Models synced with the database.'))
    .catch((err) => console.error('Error syncing models with the database:', err.message));

module.exports = sequelize;
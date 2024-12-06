const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('final_project_db', 'root', '', {
    host: 'localhost',
    port: 3307, 
    dialect: 'mysql',
});

// Test the database connection
sequelize.authenticate()
    .then(() => console.log('Database connection established successfully.'))
    .catch((err) => console.error('Unable to connect to the database:', err.message));

// Automatically synchronize the models with the database
sequelize.sync({ force: false })
    .then(() => console.log('Models synced with the database.'))
    .catch((err) => console.error('Error syncing models with the database:', err.message));

module.exports = sequelize;

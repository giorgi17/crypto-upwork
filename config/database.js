const { Sequelize } = require('sequelize');

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize('crypto', 'postgres', 'giorgi123', {
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;

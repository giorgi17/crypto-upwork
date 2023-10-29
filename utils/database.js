const { Sequelize } = require('sequelize');
const pgp = require('pg-promise')();

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize('crypto', 'postgres', 'giorgi123', {
    dialect: 'postgres',
    logging: false,
});

const pg_db = pgp('postgres://postgres:giorgi123@localhost:5432/crypto');

module.exports = { sequelize, pg_db };

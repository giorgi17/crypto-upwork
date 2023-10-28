const { Sequelize } = require('sequelize');
const User = require('../models/user');
const Filter = require('../models/filter');
const Token = require('../models/token');

const actions = require('../actions');

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize('crypto', 'postgres', 'giorgi123', {
    database: 'crypto',
    username: 'postgres',
    password: 'giorgi123',
    dialect: 'postgres',
    logging: false,
});

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        sequelize.options.logging = false;
        console.log('Connection has been established successfully.');

        const userModel = User(sequelize);
        const filterModel = Filter(sequelize);
        const tokenModel = Token(sequelize);

        userModel.hasMany(filterModel, { as: 'filters' });
        filterModel.belongsTo(userModel, {
            foreignKey: 'userId',
            as: 'filter',
        });

        await sequelize.sync();

        // Performing actions
        actions.creatingUser(userModel);
        actions.createFilter(filterModel);
        actions.createToken(tokenModel, userModel, filterModel);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = dbConnection;

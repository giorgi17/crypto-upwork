const { Sequelize } = require('sequelize');
const User = require('../models/user');
const Filter = require('../models/filter');
const Token = require('../models/token');

const actions = require('../actions');
const dummyData = require('../actions/dummyData');

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize('crypto', 'postgres', 'giorgi123', {
    dialect: 'postgres',
    logging: false,
});

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
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

        ////////// Performing actions
        // Creating first tokens
        actions.createToken(tokenModel, filterModel, dummyData.token1Data);
        actions.createToken(tokenModel, filterModel, dummyData.token2Data);

        // Creating users
        actions.createUser(userModel, dummyData.user1Data);
        actions.createUser(userModel, dummyData.user2Data);

        // Creating first 2 filters
        actions.createFilter(filterModel, dummyData.filter1Data);
        actions.createFilter(filterModel, dummyData.filter2Data);

        // First token update
        actions.updateToken(
            tokenModel,
            filterModel,
            dummyData.updateToken1Data
        );

        // Second token update
        actions.updateToken(
            tokenModel,
            filterModel,
            dummyData.updateToken2Data
        );

        // Creating new user1 filter
        actions.createFilter(filterModel, dummyData.filter3Data);

        // Updating first token's "signal_int"
        actions.updateToken(
            tokenModel,
            filterModel,
            dummyData.updateToken3Data
        );
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = dbConnection;

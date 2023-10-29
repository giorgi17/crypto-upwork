const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Token = sequelize.define('token', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    signal_x: {
        type: DataTypes.BOOLEAN,
    },
    signal_y: {
        type: DataTypes.BOOLEAN,
    },
    signal_z: {
        type: DataTypes.BOOLEAN,
    },
    signal_int: { type: DataTypes.INTEGER },
});

module.exports = Token;

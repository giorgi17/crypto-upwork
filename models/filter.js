const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Filter = sequelize.define('filter', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
    },
    filterName: {
        type: DataTypes.STRING,
        allowNull: false,
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
    signal_int: {
        type: DataTypes.JSONB,
    },
    signal_string: {
        type: DataTypes.STRING,
    },
});

module.exports = Filter;

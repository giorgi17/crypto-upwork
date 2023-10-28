const { DataTypes } = require('sequelize');

const Filter = db =>
    db.define('filter', {
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
    });

module.exports = Filter;

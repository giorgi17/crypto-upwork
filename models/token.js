const { DataTypes } = require('sequelize');

const Token = db =>
    db.define('token', {
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

module.exports = Token;

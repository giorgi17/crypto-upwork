const { DataTypes } = require('sequelize');

const User = db =>
    db.define('user', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        fullName: {
            type: DataTypes.STRING,
        },
    });

module.exports = User;

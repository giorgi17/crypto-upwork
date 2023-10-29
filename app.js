const express = require('express');
const sequelize = require('./config/database');
const actionSequence = require('./actions/actionSequence');
const User = require('./models/user');
const Filter = require('./models/filter');
const Token = require('./models/token');

const server = express();

// Defining model relationships
User.hasMany(Filter, { as: 'filters' });
Filter.belongsTo(User, {
    foreignKey: 'userId',
    as: 'filter',
});

// sync method checks if all models have approprite tables created and creates them if not
sequelize
    // Use ".sync({ force: true })" to create new tables on every iteration
    // .sync({ force: true })
    .sync()
    .then(result => {
        console.log('Database connection has been established successfully.');
        // Executing action sequence
        actionSequence();

        server.listen(3000, () => console.log('Server running!'));
    })
    .catch(err => console.log(err));

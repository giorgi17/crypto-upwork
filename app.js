const express = require('express');
const { sequelize, pg_db } = require('./utils/database');
const actionSequence = require('./actions/actionSequence');
const User = require('./models/user');
const Filter = require('./models/filter');
const Token = require('./models/token');
const { setupTrigger, startListening } = require('./utils/queries');

if (process.env.INITIALIZED !== 'true') {
    // Run your one-time initialization code here.
    setupTrigger();
    startListening();
    // Once the code has run, set the environment variable to indicate that it has been initialized.
    process.env.INITIALIZED = 'true';
}

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

// pg_db client connection
pg_db.connect().then(result => {
    console.log('pg_db connection successful');
});

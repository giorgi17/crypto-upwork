const express = require('express');
const dbConnection = require('./config/db');

const server = express();

server.listen(6000, () => {
    console.log('Server running!');

    dbConnection();
});

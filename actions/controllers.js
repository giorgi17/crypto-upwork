const Token = require('../models/token');
const Filter = require('../models/filter');
const User = require('../models/user');
const helpers = require('./helpers');

const createUser = data => {
    User.create(data)
        .then(user => {
            console.log('New user created:', user.toJSON());
        })
        .catch(error => {
            console.error('Error creating user!');
        });
};

const createFilter = data => {
    Filter.create(data)
        .then(filter => {
            console.log('New filter created:', filter.toJSON());
        })
        .catch(error => {
            console.error('Error creating filter!');
        });
};

const createToken = async data => {
    Token.create(data)
        .then(token => {
            console.log('New token created:', token.toJSON());
            helpers.filterMethod(data.id);
        })
        .catch(error => {
            console.error('Error creating token!');
        });
};

const updateToken = async data => {
    Token.update(
        { ...data.dataToUpdate }, // New data to set
        {
            where: { id: data.id }, // The condition to identify the record to update
        }
    )
        .then(([rowsUpdated]) => {
            if (rowsUpdated > 0) {
                console.log('Token updated successfully');
                helpers.filterMethod(data.id);
            } else {
                console.log('No Tokens were updated.');
            }
        })
        .catch(error => {
            console.error('Error updating Token!');
        });
};

module.exports = { createUser, createFilter, createToken, updateToken };

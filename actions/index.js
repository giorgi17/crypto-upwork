const helpers = require('./helpers');

const createUser = (User, data) => {
    User.create(data)
        .then(user => {
            console.log('New user created:', user.toJSON());
        })
        .catch(error => {
            console.error('Error creating user!');
        });
};

const createFilter = (Filter, data) => {
    Filter.create(data)
        .then(filter => {
            console.log('New filter created:', filter.toJSON());
        })
        .catch(error => {
            console.error('Error creating filter!');
        });
};

const createToken = async (Token, Filter, data) => {
    Token.create(data)
        .then(token => {
            console.log('New token created:', token.toJSON());
            helpers.filterMethod(Filter, Token, data.id);
        })
        .catch(error => {
            console.error('Error creating token!');
        });
};

const updateToken = async (Token, Filter, data) => {
    Token.update(
        { ...data.dataToUpdate }, // New data to set
        {
            where: { id: data.id }, // The condition to identify the record to update
        }
    )
        .then(([rowsUpdated]) => {
            if (rowsUpdated > 0) {
                console.log('Token updated successfully');
                helpers.filterMethod(Filter, Token, data.id);
            } else {
                console.log('No Tokens were updated.');
            }
        })
        .catch(error => {
            console.error('Error updating Token!');
        });
};

module.exports = { createUser, createFilter, createToken, updateToken };

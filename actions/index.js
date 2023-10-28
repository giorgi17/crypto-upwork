const creatingUser = User => {
    User.create({
        id: 1,
        email: 'newuser@example.com',
        fullName: 'New User',
    })
        .then(user => {
            console.log('New user created:', user.toJSON());
        })
        .catch(error => {
            console.error('Error creating user:', error);
        });
};

const createFilter = Filter => {
    Filter.create({
        id: 17,
        name: 'Crypto',
        address: '123 Main St',
        signal_x: true,
        signal_y: false,
        signal_z: true,
        userId: 1, // Id of the user this filter should belong to
    })
        .then(filter => {
            console.log('New filter created:', filter.toJSON());
        })
        .catch(error => {
            console.error('Error creating filter:', error);
        });
};

const createToken = async (Token, User, Filter) => {
    const newTokenData = {
        id: 1,
        name: 'Crypto',
        address: '123 Main St',
        signal_x: true,
        signal_y: false,
        signal_z: true,
    };

    // Fetching user filters
    const user = await User.findByPk(1, {
        include: {
            model: Filter,
            as: 'filters',
        },
    });

    // Gather the properties of all user's filters
    const userFilters = user?.filters.map(filter => filter.toJSON());

    const matchedFilters = [];

    // Checking new token data against user filters
    if (userFilters) {
        for (const filter of userFilters) {
            if (
                filter.name === newTokenData.name &&
                filter.address === newTokenData.address &&
                filter.signal_x === newTokenData.signal_x &&
                filter.signal_y === newTokenData.signal_y &&
                filter.signal_z === newTokenData.signal_z
            ) {
                matchedFilters.push({
                    filterId: filter.id,
                    matchedTokenData: newTokenData,
                });
            }
        }
    }

    // Logging all the instances where stored filters match the new token data.
    console.log('matchedFilters', matchedFilters);

    // Saving new token to db
    Token.create(newTokenData)
        .then(token => {
            console.log('New token created:', token.toJSON());
        })
        .catch(error => {
            console.error('Error creating token:', error);
        });
};

module.exports = { creatingUser, createFilter, createToken };

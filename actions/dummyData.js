// Users data
const user1Data = {
    id: 1,
    email: 'firstUser@example.com',
    fullName: 'firstUser',
};

const user2Data = {
    id: 2,
    email: 'secondUser@example.com',
    fullName: 'secondUser',
};

// Tokens data
const token1Data = {
    id: 1,
    name: 'firstToken',
    address: '123 Main St',
    signal_x: false,
    signal_y: false,
    signal_z: true,
    signal_int: 5,
};

const token2Data = {
    id: 2,
    name: 'secondToken',
    address: '123 Main St',
    signal_x: false,
    signal_y: false,
    signal_z: true,
    signal_int: 17,
};

// Filters data
const filter1Data = {
    id: 1,
    filterName: 'sx',
    signal_x: true,
    userId: 1, // Id of the user this filter should belong to
};

const filter2Data = {
    id: 2,
    filterName: 'sy',
    signal_y: true,
    userId: 2, // Id of the user this filter should belong to
};

const filter3Data = {
    id: 3,
    filterName: 'sxx',
    signal_x: true,
    signal_int: { case: 'more', number: 4 },
    userId: 1, // Id of the user this filter should belong to
};

// Token update Data
const updateToken1Data = {
    id: 1,
    dataToUpdate: {
        signal_x: true,
    },
};

const updateToken2Data = {
    id: 2,
    dataToUpdate: {
        signal_y: true,
    },
};

const updateToken3Data = {
    id: 1,
    dataToUpdate: {
        signal_int: 5,
    },
};

// Filtering fields
const fieldsToFilter = [
    'name',
    'address',
    'signal_x',
    'signal_y',
    'signal_z',
    'signal_int',
];

module.exports = {
    user1Data,
    user2Data,
    token1Data,
    token2Data,
    filter1Data,
    filter2Data,
    updateToken1Data,
    fieldsToFilter,
    updateToken2Data,
    filter3Data,
    updateToken3Data,
};

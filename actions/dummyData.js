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

const token3Data = {
    id: 3,
    name: 'firstToken',
    address: '123 Main St',
    signal_x: false,
    signal_y: false,
    signal_z: true,
    signal_int: 200,
    signal_source: 'google',
};

const token4Data = {
    id: 4,
    name: 'firstToken',
    address: '123 Main St',
    signal_x: false,
    signal_y: false,
    signal_z: true,
    signal_int: 200,
    signal_source: 'bing',
};

const token5Data = {
    id: 5,
    name: 'firstToken',
    address: '123 Main St',
    signal_x: false,
    signal_y: false,
    signal_z: true,
    signal_int: 200,
    signal_source: 'yahoo',
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

const filter4Data = {
    id: 4,
    filterName: 'sxx2',
    signal_string: 'aaa',
    userId: 1, // Id of the user this filter should belong to
};

const filter5Data = {
    id: 5,
    filterName: 'sxx3',
    signal_source: [
        { case: 'or', value: 'google' },
        { case: 'or', value: 'bing' },
        { case: 'not', value: 'yahoo' },
    ],
    userId: 1, // Id of the user this filter should belong to
};

const filter6Data = {
    id: 6,
    filterName: 'sxx4',
    signal_source: [
        { case: 'or', value: 'google' },
        { case: 'or', value: 'bing' },
        { case: 'or', value: 'yahoo' },
    ],
    userId: 1, // Id of the user this filter should belong to
};

const filter7Data = {
    id: 7,
    filterName: 'sxx5',
    signal_source: [
        { case: 'or', value: 'google' },
        { case: 'or', value: 'bing' },
    ],
    userId: 1, // Id of the user this filter should belong to
};

const filter8Data = {
    id: 8,
    filterName: 'sxx6',
    signal_source: [
        { case: 'or', value: 'google' },
        { case: 'or', value: 'bing' },
    ],
    userId: 1, // Id of the user this filter should belong to
};

const filter9Data = {
    id: 9,
    filterName: 'sxx7',
    signal_source: [{ case: 'not', value: 'google' }],
    userId: 1, // Id of the user this filter should belong to
};

const filter10Data = {
    id: 10,
    filterName: 'sxx8',
    signal_source: [{ case: 'or', value: 'google' }],
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

const updateToken4Data = {
    id: 1,
    dataToUpdate: {
        signal_string: 'aaa',
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
    'signal_string',
    'signal_source',
];

module.exports = {
    user1Data,
    user2Data,
    token1Data,
    token2Data,
    token3Data,
    token4Data,
    token5Data,
    filter1Data,
    filter2Data,
    filter3Data,
    filter4Data,
    filter5Data,
    filter6Data,
    filter7Data,
    filter8Data,
    filter9Data,
    filter10Data,
    updateToken1Data,
    updateToken2Data,
    updateToken3Data,
    updateToken4Data,
    fieldsToFilter,
};

const controllers = require('./controllers');
const dummyData = require('./dummyData');

const actionSequence = async () => {
    try {
        // Creating first tokens
        controllers.createToken(dummyData.token1Data);
        controllers.createToken(dummyData.token2Data);
        // Creating users
        controllers.createUser(dummyData.user1Data);
        controllers.createUser(dummyData.user2Data);
        // Creating first 2 filters
        // controllers.createFilter(dummyData.filter1Data);
        // controllers.createFilter(dummyData.filter2Data);
        // First token update
        controllers.updateToken(dummyData.updateToken1Data);
        // Second token update
        controllers.updateToken(dummyData.updateToken2Data);
        // Creating new user1 filter
        // controllers.createFilter(dummyData.filter3Data);
        // Updating first token's "signal_int"
        controllers.updateToken(dummyData.updateToken3Data);
        // Creating new user1 filter
        // console.log('dummyData', dummyData);

        // console.log('dummyData.filter4Data', dummyData.filter4Data)
        controllers.createFilter(dummyData.filter4Data);
        // Updating first token's "signal_int"
        controllers.updateToken(dummyData.updateToken4Data);
    } catch (error) {
        console.error('Error while performing action sequence!');
    }
};

module.exports = actionSequence;

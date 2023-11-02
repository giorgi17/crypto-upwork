const Filter = require('../models/filter');
const Token = require('../models/token');
const dummyData = require('./dummyData');

const filterMethod = async (tokenId, actionName) => {
    const matchedFilters = [];

    try {
        const allFilters = await Filter.findAll();

        if (!allFilters) return;
        const filtersToJson = allFilters.map(instance => instance.toJSON());

        const filteredFilters = filtersToJson.map(obj => {
            for (const key in obj) {
                if (obj[key] === null) {
                    delete obj[key];
                }
            }
            return obj;
        });

        const tokenData = await Token.findByPk(tokenId);

        // Filtering
        filteredFilters.forEach(item => {
            let matched = true;
            for (const key in item) {
                if (dummyData.fieldsToFilter.includes(key)) {
                    if (key === 'signal_int') {
                        if (item[key].case === 'more') {
                            if (tokenData[key] < item[key].number) {
                                matched = false;
                                break;
                            }
                        } else if (item[key].case === 'less') {
                            if (tokenData[key] > item[key].number) {
                                matched = false;
                                break;
                            }
                        } else if (item[key].case === 'equal') {
                            if (tokenData[key] !== item[key].number) {
                                matched = false;
                                break;
                            }
                        }
                    } else if (key === 'signal_source') {
                        const sourceMatched = sourceFilter(
                            item[key],
                            tokenData
                        );

                        if (!sourceMatched) {
                            matched = false;
                            break;
                        }
                    } else if (item[key] !== tokenData[key]) {
                        matched = false;
                        break;
                    }
                }
            }

            if (matched) {
                const matchedFilterData = {
                    id: item.id,
                    filterName: item.filterName,
                    userId: item.userId,
                };
                matchedFilters.push(matchedFilterData);
            }
        });
    } catch (error) {
        console.log("Couldn't perform filtering!", error);
    }

    console.log(
        `matchedFilters for TokenId - ${tokenId}, action - ${actionName}`,
        matchedFilters
    );
    return matchedFilters;
};

const sourceFilter = (sourceConditions, tokenData) => {
    let isMatched = false;
    const key = 'signal_source';

    sourceConditions.forEach(sourceItem => {
        if (sourceItem.case === 'or') {
            if (sourceItem.value === tokenData[key]) {
                isMatched = true;
            }
        } else if (sourceItem.case === 'not') {
            if (sourceItem.value === tokenData[key]) {
                isMatched = false;
                return isMatched;
            } else {
                isMatched = true;
                return isMatched;
            }
        }
    });

    return isMatched;
};

module.exports = { filterMethod };

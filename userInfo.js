const { processArray, formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage:
const originalNames = ['Samuel', 'Emmanuel', 'Dave', 'David', 'Solomon'];
const inputArray = [1, 2, 3, 4, 5];

const processedArray = processArray(inputArray);
const modifiedNames = formatArrayStrings(originalNames, processedArray);

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

module.exports = { createUserProfiles };

/* 
Given an array of strings
return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "Bob", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    Bob: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 *  Possible hint: .hasOwnProperty() <- Don't know it? Google it as a group!
 */


function makeFrequencyTable(arr) {
        const freqTable = {} 
    for (let i = 0; i < arr.length; i++) { 
        let letter = arr[i]; 
        if (freqTable[letter]) {  
            freqTable[letter]++;
        } else { 
            freqTable[letter] = 1;
        }
    }
    
    return freqTable;
    }

console.log(makeFrequencyTable(arr1))
console.log("Expected: ", expected1);
console.log(makeFrequencyTable(arr2))
console.log("Expected: ", expected2);
console.log(makeFrequencyTable(arr3))
console.log("Expected: ", expected3);

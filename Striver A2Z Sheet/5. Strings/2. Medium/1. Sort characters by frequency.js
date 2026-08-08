/*
Problem Statement: You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters.
If two or more characters have same frequency then arrange them in alphabetic order.
*/

let testCase1Str1 = "tree";

function sortCharacterByFrequencyApp1(str) {
    const mappingStore = new Map();
    for(let i = 0; i < str.length; i++) {
        if(mappingStore.has(str[i])) {
            mappingStore.set(str[i], mappingStore.get(str[i]) + 1);
        } else {
            mappingStore.set(str[i], 1);
        }
    };
    console.log(mappingStore);
};

console.log("Test Case 1 Approach 1", sortCharacterByFrequencyApp1(testCase1Str1));
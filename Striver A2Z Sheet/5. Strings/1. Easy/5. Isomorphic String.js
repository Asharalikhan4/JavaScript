/*
Problem Statement: Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

let testCase1Str1 = "paper", testCase1Str2 = "title";
let testCase2Str1 = "foo", testCase2Str2 = "bar";

function isomorphicStringApproach1(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    const mappingStore = new Map();
    for(let i = 0; i < str1.length; i++) {
        if(mappingStore.has(str1[i])) {
            let mappedKey = mappingStore.get(str1[i]);
            if(mappedKey !== str2[i]) {
                return false;
            }
        } else {
            mappingStore.set(str1[i], str2[i]);
        }
    }
    return true;
};

console.log("Test Case 1 Approach 1:", isomorphicStringApproach1(testCase1Str1, testCase1Str2));
console.log("Test Case 2 Approach 1:", isomorphicStringApproach1(testCase2Str1, testCase2Str2));

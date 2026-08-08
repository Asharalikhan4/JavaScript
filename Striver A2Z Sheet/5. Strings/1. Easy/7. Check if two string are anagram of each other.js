/*
Problem Statement: Given two strings, check if two strings are anagrams of each other or not.

Anagram: A word or phrase that is made by arranging the letter of another word or phrase in a different order.
*/

let testCase1Str1 = "CAT", testCase1Str2 = "ACT";
let testCase2Str1 = "RULES", testCase2Str2 = "LESRT"; 


function checkAnagramApp1(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    let freq = new Array(26).fill(0);
    for(let i = 0; i < str1.length; i++) {
        freq[str1.charCodeAt(i) - 'A'.charCodeAt(0)]++;
        freq[str2.charCodeAt(i) - 'A'.charCodeAt(0)]--;
    }
    for(let i = 0; i < 26; i++) {
        if(freq[i] !== 0) {
            return false;
        }
    }
    return true;
};

console.log("Approach 1 Test Case 1:", checkAnagramApp1(testCase1Str1, testCase1Str2));
console.log("Approach 1 Test Case 2:", checkAnagramApp1(testCase2Str1, testCase2Str2));
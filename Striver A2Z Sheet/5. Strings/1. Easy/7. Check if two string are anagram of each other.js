/*
Problem Statement: Given two strings, check if two strings are anagrams of each other or not.
Anagram: A word or phrase that is made by arranging the letter of another word or phrase in a different order.

Approach 1 -> Take an array or hashmap, i'll be taking an array of length of english letter which is 26 and fill with 0, no iterate over the first string and check the character ASCII value and increment the value at this index and keep doing for the whole first string, then iterate over the second string and do the same thing just decrement the value this time after that simply run the loop and check weather all the value inside the array is 0 or not, if 0 return true otherwise false.
*/

let testCase1Str1 = "CAT", testCase1Str2 = "ACT";
let testCase2Str1 = "RULES", testCase2Str2 = "LESRT";

function checkAnagramApproach1(str1, str2) {
  /*
    T.C -> O(N),
    S.C -> O(N)
  */
  if (str1.length !== str2.length) {
    return false;
  }
  let freq = new Array(26).fill(0);
  for (let i = 0; i < str1.length; i++) {
    freq[str1.charCodeAt(i) - "A".charCodeAt(0)]++;
    freq[str2.charCodeAt(i) - "A".charCodeAt(0)]--;
  }
  for (let i = 0; i < 26; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(
  "Approach 1 Test Case 1:",
  checkAnagramApproach1(testCase1Str1, testCase1Str2),
);
console.log(
  "Approach 1 Test Case 2:",
  checkAnagramApproach1(testCase2Str1, testCase2Str2),
);

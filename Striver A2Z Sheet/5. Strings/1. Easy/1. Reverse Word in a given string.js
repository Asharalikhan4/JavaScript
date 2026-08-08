/*
Problem Statement: Given an input string, containing upper-case and lower-case letters, digits, and spaces( ' ' ). A word is defined as a sequence of non-space characters. The words in s are separated by at least one space. Return a string with the words in reverse order, concatenated by a single space.
*/

let testCase1 = "welcome to the jungle";
// Output: "jungle the to welcome"
let testCase2 = " amazing coding skills ";
// Output: " amazing coding skills "


/*
- Optimised Approach
- Trim leading and trailing zero's.
- Split string from empty spaces.
- Reverse the array.
- Join array with spaces.
- TC - O(N)
- SC - O(1)
*/

function reverseWordsInAGivenStringApproach1(str) {
  return str.trim("").split(" ").reverse().join(" ");
};

console.log("Test Case 1, Approach 1 Result:", reverseWordsInAGivenStringApproach1(testCase1));
console.log("Test Case 2, Approach 1 Result:", reverseWordsInAGivenStringApproach1(testCase2));
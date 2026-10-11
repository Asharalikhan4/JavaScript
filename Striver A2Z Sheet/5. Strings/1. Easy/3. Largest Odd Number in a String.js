/*
Problem Statement: You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
A substring is a contiguous sequence of characters within a string.

Approach 1 -> We'll run a for loop from the back and keep checking the element weather it is odd or even, if it is odd then we do the substring from the start to that element and return it, and if we don't find anything in our whole array then we'll simply return the empty string.
(here space will be O(N) because strings are immutable in js)
*/

let testCase1 = "5347";
// Output: "5347"
let testCase2 = "0214638";
// Output: "21463"
let testCase3 = "4206";
// Output: ""

function largestOddNumberInAStringApproach1(str) {
  /*
    T.C -> O(N)
    S.C -> O(N)
  */
  for (let i = str.length - 1; i >= 0; i--) {
    if (parseInt(str[i]) % 2 !== 0) {
      return str.substring(0, i + 1);
    }
  }
  return "";
};

console.log(
  "Test Case 1, 2 & 3, Approach 1 Result:",
  largestOddNumberInAStringApproach1(testCase1),
  largestOddNumberInAStringApproach1(testCase2),
  largestOddNumberInAStringApproach1(testCase3)
);

/*
Problem Statement: Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.
The number returned should not have leading zero's. But the given input string may have leading zero.
*/

let testCase1 = "5347";
// Output: "5347"
let testCase2 = "0214638";
// Output: "21463"

function largestOddNumberInAStringApproach1(str) {
  let num = Number(str);
  if (num % 2 === 0) {
    return str;
  }
  console.log(num);
  while (num > 0) {
    if (num / 10) {
    }
  }
};

console.log(
  "Test Case 1 & 2, Approach 1 Result:",
  largestOddNumberInAStringApproach1(testCase1),
  largestOddNumberInAStringApproach1(testCase2),
);

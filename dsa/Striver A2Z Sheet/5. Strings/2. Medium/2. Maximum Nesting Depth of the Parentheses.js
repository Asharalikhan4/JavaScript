/*
Problem Statement -> Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

Approach 1 -> Take two variable, maxDepth and currentDepth and iterate over the string as soon as you encounter ( increment the currentDepth and when you encounter ) decrement the current depth and for each iteration keep checking weather the current depth is higher if yes assign it to maxDepth;
*/

let testCase1 = "(1+(2*3)+((8)/4))+1";
let testCase2 = "(1)+((2))+(((3)))";
let testCase3 = "()(())((()()))";

function maximumNestingDepthOfTheParenthesesApproach1(str) {
  /*
    T.C -> O(N)
    S.C -> O(1)
  */
  let maxDepth = 0, currentDepth = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      currentDepth++;
    } else if (str[i] === ')') {
      currentDepth--;
    }
    if (currentDepth > maxDepth) {
      maxDepth = currentDepth;
    }
  };
  return maxDepth;
};

console.log("Approach 1, Test Case 1:", maximumNestingDepthOfTheParenthesesApproach1(testCase1));
console.log("Approach 1, Test Case 2:", maximumNestingDepthOfTheParenthesesApproach1(testCase2));
console.log("Approach 1, Test Case 3:", maximumNestingDepthOfTheParenthesesApproach1(testCase3));

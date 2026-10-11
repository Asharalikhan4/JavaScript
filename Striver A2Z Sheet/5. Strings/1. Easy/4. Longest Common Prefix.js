/*
Problem Statement -> Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Approach 1 ->
*/

let testCase1 = ["flower","flow","flight"]
// Output: "fl"

let testCase2 = ["dog","racecar","car"]
// Output: ""

function longestCommonPrefixApproach1(strArr) {
  /*
    T.C -> O(N*M)
    S.C -> O(N)
  */
  if (strArr.length === 0) {
    return ""
  };
  let smallestStr = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length < smallestStr.length) {
      smallestStr = strArr[i];
    }
  }
  let prefix = "";
  for (let i = 0; i < smallestStr.length; i++) {
    let bool = true;
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[j][i] !== smallestStr[i]) {
        bool = false;
        break;
      }
    }
    if (bool) {
      prefix += smallestStr[i];
    } else {
      return prefix;
    }
  }
  return prefix;
};

console.log("Test Case 1, Approach 1:", longestCommonPrefixApproach1(testCase1));
console.log("Test Case 2, Approach 1:", longestCommonPrefixApproach1(testCase2));
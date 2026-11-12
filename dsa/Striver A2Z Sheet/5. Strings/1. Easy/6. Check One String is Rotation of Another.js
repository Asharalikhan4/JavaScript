/*
Problem Statement -> Given two strings s1 and s2, of equal lengths. The task is to check if s2 is a rotated version of the string s1.

Note: A string is a rotation of another if it can be formed by moving characters from the start to the end (or vice versa) without rearranging them.

Approach 1 -> we first add the first string into itself and store in some other variable and then check weather does thsi string include the second string or not, if include means true otherwise false.
*/

let str1TestCase1 = "abcd", str2TestCase1 = "cdab";
let str1TestCase2 = "aab", str2TestCase2 = "aba";
let str1TestCase3 = "abcd", str2TestCase3 = "acbd"

function checkOneStringIsRotationOfAnotherApproach1(str1, str2) {
  /*
    T.C -> O(N+M),
    S.C -> O(N)
  */
  if (str1.length !== str2.length) {
    return false;
  }
  let str = str1 + str1;
  return str.includes(str2);
};

console.log("Test Case 1, Approach 1:", checkOneStringIsRotationOfAnotherApproach1(str1TestCase1, str2TestCase1));
console.log("Test Case 2, Approach 1:", checkOneStringIsRotationOfAnotherApproach1(str1TestCase2, str2TestCase2));
console.log("Test Case 3, Approach 1:", checkOneStringIsRotationOfAnotherApproach1(str1TestCase3, str2TestCase3));

function checkOneStringIsRotationOfAnotherApproach2(str1, str2) {
  /*
    T.C -> O(N*N),
    S.C -> O(1)
  */
  if (str1.length !== str2.length) {
    return false;
  };
  let n = str1.length;
  for (let i = 0; i < n; i++) {
    let match = true;
    for (let j = 0; j < n; j++) {
      if (str1[(i + j) % n] !== str2[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return true;
    }
  }
  return false;
};

console.log("Test Case 1, Approach 1:", checkOneStringIsRotationOfAnotherApproach2(str1TestCase1, str2TestCase1));
console.log("Test Case 2, Approach 1:", checkOneStringIsRotationOfAnotherApproach2(str1TestCase2, str2TestCase2));
console.log("Test Case 3, Approach 1:", checkOneStringIsRotationOfAnotherApproach2(str1TestCase3, str2TestCase3));
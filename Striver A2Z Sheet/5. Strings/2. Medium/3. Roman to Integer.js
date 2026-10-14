/*
Problem Statement -> Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Approach 1 -> We will first create an object having character to value mapped, then we iterate over the array and keep checking does the value of the next character have higher value or not, if higher then subtract otherwise add.
*/

let testCase1 = "III"
// Output: 3

let testCase2 = "LVIII"
// Output: 58

let testCase3 = "MCMXCIV"
// Output: 1994

function romanToIntegerApproach1(str) {
  /*
    T.C -> O(N),
    S.C -> O(1)
  */
  const symbolToValue = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  };
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    // JavaScript allows out-of-bounds access on strings and arrays.
    if (i + 1 < str.length && symbolToValue[str[i]] < symbolToValue[str[i + 1]]) {
      result -= symbolToValue[str[i]];
    } else {
      result += symbolToValue[str[i]];
    }
  };
  return result;
};

console.log("Approach 1, Test Case 1:", romanToIntegerApproach1(testCase1));
console.log("Approach 1, Test Case 2:", romanToIntegerApproach1(testCase2));
console.log("Approach 1, Test Case 3:", romanToIntegerApproach1(testCase3));
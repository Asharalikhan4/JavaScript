/*
Problem Statement -> Given an array arr[], check whether it is sorted in non-decreasing order. Return true if it is sorted otherwise false.

Approach 1 (Optimised) -> iterate over array from start to end and keep checking weather the upcoming value is equal or greater then current value, if yes then it's fine and as soon as this condition become false return false.
*/

function checkSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    };
  };
  return true;
};

let testCase1 = [10, 20, 30, 40, 50];
let testCase2 = [90, 80, 100, 70, 40, 30];

console.log("Test Case 1:", checkSorted(testCase1));
console.log("Test Case 2:", checkSorted(testCase2));
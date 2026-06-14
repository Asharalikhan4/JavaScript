/*
Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
*/

function linearSearchApproach1(arr, target) {
  for (let num of arr) {
    if (num === target) {
      return true;
    }
  }
  return false;
};

const testCase1ForApproach1 = [1, 2, 3, 4, 5], target = 5;
console.log("Test Case 1 Approach 1 Result:", linearSearchApproach1(testCase1ForApproach1, target));
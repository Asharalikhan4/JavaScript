/*
Problem Statement -> Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Approach -> 
*/

let testCaseArr1 = [5, 7, 7, 8, 8, 10], testCaseTarget1 = 8;
let testCaseArr2 = [5, 7, 7, 8, 8, 10], testCaseTarget2 = 6;
let testCaseArr3 = [], testCaseTarget3 = 0;

function lowerBoundApproach1(arr, target) {
  /*
    T.C -> O(logN),
    S.C -> O(1)
  */
  let low = 0, high = arr.length - 1, mid;
  let ans = arr.length;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

function upperBoundApproach1(arr, target) {
  /*
    T.C -> O(logN),
    S.C -> O(1)
  */
  let low = 0, high = arr.length - 1, mid;
  let ans = arr.length;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

function firstAndLastOccurenceOfGivenNumberApproach1(arr, target) {
  /*
    T.C - O(logn),
    S.C - O(1)
  */
  let lowerBound = lowerBoundApproach1(arr, target);
  if (lowerBound === arr.length || arr[lowerBound] !== target) {
    return [-1, -1];
  };
  return [lowerBound, upperBoundApproach1(arr, target) - 1];
};

console.log("Approach 1, Test Case 1: ", firstAndLastOccurenceOfGivenNumberApproach1(testCaseArr1, testCaseTarget1));
console.log("Approach 1, Test Case 2: ", firstAndLastOccurenceOfGivenNumberApproach1(testCaseArr2, testCaseTarget2));
console.log("Approach 1, Test Case 3: ", firstAndLastOccurenceOfGivenNumberApproach1(testCaseArr3, testCaseTarget3));
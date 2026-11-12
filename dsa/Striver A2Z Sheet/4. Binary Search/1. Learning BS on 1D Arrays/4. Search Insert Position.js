/*
Problem Statement -> Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
*/

let testCaseArr1 = [1, 3, 5, 6], testCaseTarget1 = 5;
let testCaseArr2 = [1, 3, 5, 6], testCaseTarget2 = 2;
let testCaseArr3 = [1, 3, 5, 6], testCaseTarget3 = 7;

function searchInsertPositionApproach1(arr, target) {
  let low = 0, high = arr.length - 1, mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return mid;
};

console.log("Test Case 1, Approach 1: ", searchInsertPositionApproach1(testCaseArr1, testCaseTarget1));
console.log("Test Case 2, Approach 2: ", searchInsertPositionApproach1(testCaseArr2, testCaseTarget2));
console.log("Test Case 3, Approach 3: ", searchInsertPositionApproach1(testCaseArr3, testCaseTarget3));
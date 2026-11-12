/*
Problem Statement -> Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

# Keep in mind binary search is applicable when data is sorted.

Approach 1 -> So we will take three pointer low, mid and high, the low will be at the start of the array, high will be pointing at the last element of the array and mid we calculate using this formula, mid = low + Math.floor((high - low) / 2); now we will run a while loop till low <= high and check weather arr[mid] is the element we're looking for if yes return it else if check if arr[mid] > target then assign high = mid - 1 and at last if arr[mid] < target assign low = mid + 1, mid will be calculated at each iteration, and if you still won't get the target then at last return -1 after the while loop.
*/

let testCaseArr1 = [-1, 0, 3, 5, 9, 12], testCaseTarget1 = 9;
let testCaseArr2 = [-1, 0, 3, 5, 9, 12], testCaseTarget2 = 2;

function binarySearchIterative(arr, target) {
  /*
    T.C -> O(logN),
    S.C -> O(1)
  */
  let low = 0, high = arr.length - 1, mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

console.log("Binary Search Iterative, test case 1:", binarySearchIterative(testCaseArr1, testCaseTarget1));
console.log("Binary Search Iterative, test case 2:", binarySearchIterative(testCaseArr2, testCaseTarget2));
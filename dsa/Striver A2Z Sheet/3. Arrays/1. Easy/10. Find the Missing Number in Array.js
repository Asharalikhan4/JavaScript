/*
Problem Statement -> Given an array arr[] of size n-1 with distinct integers in the range of [1, n]. This array represents a permutation of the integers from 1 to n with one element missing. Find the missing element in the array.

Approach 1 (Brute Force) -> Run nested loop for element 1 to n, for each element check weather that element is present in array or not till the last iteration.

Approach 2 (Optimal Approach) -> take the sum of the array then use standard formula n*((n+1)/2) to calculate the sum of n number then subtract the sum of current array from sum of n number, where n will be the length of array.
*/

function findTheMissingNumberApproach3(arr) {
  /*
    TC - O(N)
    SC - O(1)
  */
  let arrLength = arr.length,
    sum = 0,
    expectedSum = 0;
  for (let i = 0; i < arrLength; i++) {
    sum += arr[i];
  }
  arrLength = arrLength + 1;
  expectedSum = (arrLength * (arrLength + 1)) / 2;
  return expectedSum - sum;
}

const testCase1 = [8, 2, 4, 5, 3, 7, 1];
console.log(
  "Test case 1 Approach 3 result:",
  findTheMissingNumberApproach3(testCase1),
);

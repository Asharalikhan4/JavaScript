/*
Problem Statement -> Given an array arr[] of size n-1 with distinct integers in the range of [1, n]. This array represents a permutation of the integers from 1 to n with one element missing. Find the missing element in the array.
*/

function findTheMissingNumberApproach3(arr) {
  let arrLength = arr.length, sum = 0, expectedSum = 0;
  for (let i = 0; i < arrLength; i++) {
    sum += arr[i];
  }
  arrLength = arrLength + 1;
  expectedSum = (arrLength * (arrLength + 1)) / 2;
  return expectedSum - sum;
  /*
  TC - O(N)
  SC - O(1)
  */
}

const testCase1 = [8, 2, 4, 5, 3, 7, 1];
console.log("Test case 1 Approach 3 result:", findTheMissingNumberApproach3(testCase1));

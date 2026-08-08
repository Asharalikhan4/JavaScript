/*
Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
The union of two arrays can be defined as the common and distinct elements in the two arrays.
NOTE: Elements in the union should be in ascending order.
*/

// Approach 1
function unionOfTwoArraysApproach1(arr1, arr2) {
  const union = [...new Set(arr1, arr2)];
  return union;
}

const testCase1ForApproach1 = [1, 2, 3, 4, 5];
const testCase2ForApproach1 = [2, 3, 4, 4, 5];

console.log("Test Case 1 & 2, Approach 1 Result:", unionOfTwoArraysApproach1(testCase1ForApproach1, testCase2ForApproach1));


// Approach 2
function unionOfTwoArraysApproach2(arr1, arr2) {
  for (let i = 0; i < arr1.length > arr2.length ? arr1.length : arr2.length; i++) {
    if (arr1[i] > arr2[i]) {
      
    }
  }
}
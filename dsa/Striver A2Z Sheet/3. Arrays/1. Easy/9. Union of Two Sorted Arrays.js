/*
Problem Statement -> Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in the union of the two arrays in sorted order. Union of two arrays can be defined as the set containing distinct elements that are present in either of the arrays.

Approach 1 (Brute Force) -> Merge two array then convert it into set and then again convert it into array.

Approach 2 (Optimal Approach) -> Take one pointer for each array and iterate till one of the array is completed, in this iteration keep on checking that which element is smaller and push the smaller element, while doing this also keep checking weather the already pushed element shouldn't be same as the next element which is going to be pushed and keep increment the pointer, and at last run a loop for both the pointer to covered the left out element.
*/

// Approach 1
function unionOfTwoArraysApproach1(arr1, arr2) {
  /*
    T.C -> O(N+M)
    S.C -> O(N+M)
  */
  const union = [...new Set([...arr1, ...arr2])];
  return union;
}

const testCase1ForApproach1 = [1, 2, 3, 4, 5];
const testCase2ForApproach1 = [2, 3, 4, 4, 5];

console.log(
  "Test Case 1 & 2, Approach 1 Result:",
  unionOfTwoArraysApproach1(testCase1ForApproach1, testCase2ForApproach1),
);

// Approach 2
function unionOfTwoArraysApproach2(arr1, arr2) {
  /*
    T.C -> O(N+M)
    S.C -> O(N+M), that too only for returning the answer and not for solving the problem.
  */
  let n1 = arr1.length,
    n2 = arr2.length,
    i = 0,
    j = 0,
    ansArray = [];
  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      if (ansArray.at(-1) !== arr1[i]) {
        ansArray.push(arr1[i]);
      }
      i++;
    } else {
      if (ansArray.at(-1) !== arr2[j]) {
        ansArray.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < n1) {
    if (ansArray.at(-1) !== arr1[i]) {
      ansArray.push(arr1[i]);
    }
    i++;
  }

  while (j < n2) {
    if (ansArray.at(-1) !== arr2[j]) {
      ansArray.push(arr2[j]);
    }
    j++;
  }
  
  return ansArray;
}

console.log(
  "Test Case 1 & 2, Approach 2 Result:",
  unionOfTwoArraysApproach2(testCase1ForApproach1, testCase2ForApproach1),
);

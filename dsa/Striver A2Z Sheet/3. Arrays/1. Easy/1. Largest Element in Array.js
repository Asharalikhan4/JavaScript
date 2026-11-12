/*
Problem Statement -> Given an array arr[]. The task is to find the largest element and return it.

Approach 1 -> take first element of array as the largest element and then iterate over array and keep checking, weather the current element is having largest value then stored element value, if yes then assign current variable value in the largest variable and if not then keep iterating and at last return the largest variable.
*/

function largestElementInArray(arr) {
  /*
    T.C -> O(N)
    S.C -> O(1)
  */
  let n = arr.length, largestElement = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
};

let arr = [2, 5, 1, 3, 0]
console.log(largestElementInArray(arr));
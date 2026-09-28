/*
Problem Statement -> You are given a sorted array arr[] containing positive integers. Your task is to remove all duplicate elements from this array such that each element appears only once. Return an array containing these distinct elements in the same order as they appeared.

Approach 1 (Brute Force) -> We can use set, as set only stores the unqiue value, we push all the value of array in set and the make a new array with the value of set and return.

Approach 2 (Optimized) -> We use two pointer approach, first pointer will point to the first element in an array and second pointer will start from second element of an array, and in each iteration we check weather the first pointer element and second pointer is same or not, if same we do nothing, if not then we increment the first pointer and then assign the second pointer value into it and increment the first pointer and at last we can return as the answer requested by interviewer.
*/

let testArr1 = [1, 1, 2];
let testArr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicatesApproach1(arr) {
  /*
    T.C - O(N)
    S.C - O(N)
  */
  const tempSet = new Set(arr);
  return tempSet;
};

console.log("Test Case 1 Approach 1 result:", removeDuplicatesApproach1(testArr1));

function removeDuplicatesApproach2(arr) {
  /*
    T.C - O(N)
    S.C - O(1)
  */
  let i = 0, n = arr.length;
  for (let j = 1; j < n; j++) {
    if (arr[i] != arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
};

console.log("Test Case 1 Approach 2 result:", removeDuplicatesApproach2(testArr1));
console.log("Test Case 2 Approach 2 result:", removeDuplicatesApproach2(testArr2));
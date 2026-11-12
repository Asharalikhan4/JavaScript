/*
Problem Statement -> Given an array arr[] of non-negative integers, move all the zeros to the end of the array while maintaining the relative order of the non-zero elements.

Approach 1 (Brute Force) -> Count the number of zero's in the array then create a new array push all the non-zero element in the array and push the number of zero's of the same count as calculated in the start.

Approach 2 (Optimal Approach) -> We will use two pointer approach in this, keep the first pointer at the start and second pointer also start from starting, now in each iteration we will check the second pointer is equal to zero or not, if equal to zero then move forward and if not then swap current pointer value with first pointer value and increment the first pointer by one.
*/


function moveZerosToEndApproach1(arr) {
  /*
    T.C -> O(2N)
    S.C -> O(N)
  */
  let zeroCount = 0;
  const ans = [];
  for (let num of arr) {
    if (num === 0) {
      zeroCount++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      ans.push(arr[i]);
    }
  }
  const zeroArray = Array(zeroCount).fill(0);
  return [...ans, ...zeroArray];
};

const testCase1ForApproach1 = [1, 0, 2, 3, 0, 4, 0, 1]
console.log("Test Case 1 Approach 1 Result:", moveZerosToEndApproach1(testCase1ForApproach1));

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
};

function moveZerosToEndApproach2(arr) {
  /*
    T.C -> O(N)
    S.C -> O(1)
  */
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  
  return arr;
};

const testCase1ForApproach2 = [1, 2, 0, 1, 0, 4, 0];
console.log("Test Case 1 Approach 2 Result:", moveZerosToEndApproach2(testCase1ForApproach2));
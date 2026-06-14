/*
Question -> You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

Approach 1 -> 
Approach 2 ->
*/


/*-----------------------------------------------------------Approach 1----------------------------------------------------------------------------*/

function moveZerosToEndApproach1(arr) {
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

/*-----------------------------------------------------------Approach 2----------------------------------------------------------------------------*/

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
};

function moveZerosToEndApproach2(arr) {
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
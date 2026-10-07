/*
Problem Statement -> Two Sum : Check if a pair with given sum exists in Array

Approach 1 (Brute Force Approach): Take one element from array and iterate over array and check weather there's a number that when added will give the required outcome.

Approach 2 (Optimal Approach): Take a hashmap and iterate over array and keep on checking weather target (target=targetGiven - currentElement) is in hashmap or not, if it is in hashmap then return the value of it and this value and if it is not there then push the key as value and index as value in the hashmap, follow the same procedure till the end of an array.

Approach 3 (Optimal Apporach without Hashmap): Sort the array and Take two pointer one from start and one from end, and check weather the value is equal to given target or not if yes then return and if no then check weather out calculated value is greater then target or less then target, if greater then then decrement the last pointer and if lesser increment the starting pointer.
*/

let testCaseArr1 = [2, 6, 5, 8, 11],
  testCaseArr2 = [2, 6, 5, 8, 11];
let testCaseTarget1 = 14,
  testCaseTarget2 = 15;

function twoSumApproach1(arr, target) {
  /*
    T.C - O(N*N)
    S.C - O(1)
  */
  let ans = [-1, -1];
  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (firstNum + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return ans;
}

console.log(
  "Brute Force Approach, Test case 1: ",
  twoSumApproach1(testCaseArr1, testCaseTarget1),
);
console.log(
  "Brute Force Approach, Test case 2: ",
  twoSumApproach1(testCaseArr2, testCaseTarget2),
);


function twoSumApproach2(arr, target) {
  /*
    T.C - O(N)
    S.C - O(N)
  */
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const otherHalf = target - arr[i];
    if (map.has(otherHalf)) {
      return [map.get(otherHalf), i];
    } else {
      map.set(arr[i], i);
    }
  }
  return [-1, -1];
}

console.log(
  "Better Approach, Test case 1: ",
  twoSumApproach2(testCaseArr1, testCaseTarget1),
);
console.log(
  "Better Approach, Test case 2: ",
  twoSumApproach2(testCaseArr2, testCaseTarget2),
);


function twoSumApproach3(arr, target) {
  /*
    T.C - O(N + NlogN)
    S.C - O(1)
  */
  let numsWithIndex = arr.map((val, idx) => [val, idx]);
  numsWithIndex.sort((a, b) => a[0] - b[0]);

  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = numsWithIndex[left][0] + numsWithIndex[right][0];

    if (sum === target) {
      return [numsWithIndex[left][1], numsWithIndex[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
};

console.log(
  "Optimal Approach, Test case 1: ",
  twoSumApproach3(testCaseArr1, testCaseTarget1),
);
console.log(
  "Optimal Approach, Test case 2: ",
  twoSumApproach3(testCaseArr2, testCaseTarget2),
);

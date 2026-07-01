/*
Problem Statement -> Two Sum : Check if a pair with given sum exists in Array
*/

let testCaseArr1 = [2, 6, 5, 8, 11],
  testCaseArr2 = [2, 6, 5, 8, 11];
let testCaseTarget1 = 14,
  testCaseTarget2 = 15;

/*
- Brute Force Approach
- Approach 1: Take one element from array and iterate over array and check weather there's a number that when added will give the required outcome.
- TC - O(n^2)
- SC - O(1)
*/

function twoSumApproach1(arr, target) {
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


/*
- Better Approach
- We'll use hashmap
- TC - O(n)
- SC - O(n)
*/

function twoSumApproach2(arr, target) {
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


/*
Optimal Approach
- Sort the array
- Now use two pointer approach.
*/

function twoSumApproach3(arr, target) {
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

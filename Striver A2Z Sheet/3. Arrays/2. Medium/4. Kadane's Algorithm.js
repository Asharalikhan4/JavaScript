/*
Problem Statement-> Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
Note: A subarray is a contiguous non-empty sequence of elements within an array.

Approach 1 (Brute Force Approach) -> We'll use three nested loop, the outer one will run from start to end, the second loop will run for each iteration of first loop, from where the first loop is till the end, third loop will run from where the first loop is till where the second loop is.

Approach 2 (Better Approach) -> 

Approach 3 (Kadane's Algo) -> 
*/

let testCase1 = [2, 3, 5, -2, 7, -4];
// output: 15
let testCase2 = [-2, -3, -7, -2, -10, -4];
// output: -2


function maxSumSubArrayApproach1(nums) {
  /*
    T.C -> O(N*N*N),
    S.C -> O(1)
  */
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

console.log(
  "Approach 1, Test case 1: ",
  maxSumSubArrayApproach1(testCase1),
);
console.log(
  "Approach 1, Test case 2: ",
  maxSumSubArrayApproach1(testCase2),
);


function subArrayWithMaxSumApp2(nums) {
  /*
    T.C -> O(N*N),
    S.C -> O(1)
  */
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};

console.log(
  "Approach 2, Test case 1: ",
  subArrayWithMaxSumApp2(testCase1),
);
console.log(
  "Approach 2, Test case 2: ",
  subArrayWithMaxSumApp2(testCase2),
);


function subArrayWithMaxSumApproach3(nums) {
  let maxi = -Infinity, sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += arr[i];

    if (sum > maxi) {
      sum = maxi;
    };

    if (sum < 0) {
      sum = 0;
    }
  }
  return maxi;
};

console.log(
  "Approach 3, Test case 1: ",
  subArrayWithMaxSumApp2(testCase1),
);
console.log(
  "Approach 3, Test case 2: ",
  subArrayWithMaxSumApp2(testCase2),
);
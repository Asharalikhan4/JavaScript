/*
Problem Statement-> Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
A subarray is a contiguous non-empty sequence of elements within an array.
*/

let testCase1 = [2, 3, 5, -2, 7, -4];
// output: 15
let testCase2 = [-2, -3, -7, -2, -10, -4];
// output: -2

/*
- Brute Force Approach
-
*/
function maxSumSubArrayApproach1(nums) {
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
  "Brute Force Approach, Test case 1: ",
  maxSumSubArrayApproach1(testCase1),
);
console.log(
  "Brute Force Approach, Test case 2: ",
  maxSumSubArrayApproach1(testCase2),
);


/*
- Better Approach
*/
function subArrayWithMaxSumApp2(nums) {
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
  "Better Approach, Test case 1: ",
  subArrayWithMaxSumApp2(testCase1),
);
console.log(
  "Better Approach, Test case 2: ",
  subArrayWithMaxSumApp2(testCase2),
);
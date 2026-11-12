/*
Problem Statement -> Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the lexicographically smallest greater (or next) permutation.
If no next permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order).

Approach 1 -> Generate all the permuation of the array and store it in an array, sort that array and now check for the given permuation value now return the value just after that.
*/

function permute(nums) {
  const res = [];
  const backtrack = (start) => {
    if (start === nums.length) {
      res.push([...nums])
      return;
    }
  };
  for (let i = 0; i < nums.length; i++) {
    [nums[i], nums[start]] = [nums[start], nums[i]];
    backtrack(start + 1);
    [nums[i], nums[start]] = [nums[start], nums[i]];
  };
  nums.sort((a, b) => a - b);
  backtrack(0);
  return res;
};


function nextPermutationApproach1(nums) {
  const perms = permute(nums);
  for (let i = 0; i < perms.length; i++) {
    let equal = true;
    for (let j = 0; j < nums.length; j++) {
      if (perms[i][j] !== nums[j]) {
        equal = false;
        break;
      }
      if (equal) {
        if (i === perms.length - 1) {
          return perms[0];
        }
        return perms[i + 1];
      }
    }
    return nums;
  }
}
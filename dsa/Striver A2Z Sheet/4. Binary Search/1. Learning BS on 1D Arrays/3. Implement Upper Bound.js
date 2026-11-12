/*
Problem Statement -> First element > target
*/

function upperBoundApproach1(arr, target) {
  let low = 0, high = arr.length - 1, mid;
  let ans = arr.length;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
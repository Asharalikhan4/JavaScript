/*
Problem Statement -> First element (Smallest Index) >= target.
# Even if no element is present then you can return the length of array.
*/

let testCaseArr1 = [2, 3, 7, 10, 11, 11, 25], testCaseTarget1 = 9;
let testCaseArr2 = [2, 3, 7, 10, 11, 11, 25], testCaseTarget2 = 11;
let testCaseArr3 = [2, 3, 7, 10, 11, 11, 25], testCaseTarget3 = 100;

function lowerBoundApproach1(arr, target) {
  /*
    T.C -> O(logN),
    S.C -> O(1)
  */
  let low = 0, high = arr.length - 1, mid;
  let ans = arr.length;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

console.log("Lower Bound, test case 1:", lowerBoundApproach1(testCaseArr1, testCaseTarget1));
console.log("Lower Bound, test case 2:", lowerBoundApproach1(testCaseArr2, testCaseTarget2));
console.log("Lower Bound, test case 3:", lowerBoundApproach1(testCaseArr3, testCaseTarget3));
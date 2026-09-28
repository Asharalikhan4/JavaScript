/*
Problem Statement -> Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.
Note: The second largest element should not be equal to the largest element.

Approach 1 -> take two variable largest and secondLargest and iterate over array and in each iteration check weather the current value is largest then largest element if yes then assign largest value to secondLargest and current value in largest variable and if not then check weather the current value is largest then secondLargest and less then largest then assign current value in second largest do this for each iteration and at last return the secondLargest variable.
*/

function secondLargestElementInArray(arr) {
  /*
    T.C -> O(N)
    S.C -> O(1)
  */
  let n = arr.length;
  let largest = -1, secondLargest = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
};

let arr = [12, 35, 1, 10, 34, 1];
console.log(secondLargestElementInArray(arr));
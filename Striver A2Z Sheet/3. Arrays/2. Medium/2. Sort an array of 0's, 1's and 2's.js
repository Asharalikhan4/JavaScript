/*
Problem Statement -> Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. The sorting must be done in-place, without making a copy of the original array.

Approach 1 -> Use any optimized sorting algorithm.

Approach 2 -> Count the number of 0, 1, 2 and then replace the original array value with the number of 0 then 1 and at last with 2.

Approach 3 (Dutch National Flag Algo) -> it states three condition, everything between [0....low-1] -> 0 extreme left, [low....mid-1] -> 1 and [high+1.....n-1] -> 1 extreme right 
*/

let testCase1 = [0, 1, 2, 0, 1, 2], testCase2 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

function sort012Approach1(arr) {
  /*
    T.C -> O(nlogn)
    S.C -> O(1)
  */
  return arr.sort();
};

console.log("Test Case 1 Approach 1:", sort012Approach1(testCase1));
console.log("Test Case 2 Approach 1:", sort012Approach1(testCase2));


function sort012Approach2(arr) {
  /*
    T.C -> O(4N)
    S.C -> O(1)
  */
  let count0 = 0, count1 = 0, count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count0++;
    } else if (arr[i] === 1) {
      count1++;
    } else if (arr[i] === 2) {
      count2++
    }
  }

  for (let i = 0; i < count0; i++) {
    arr[i] = 0;
  }

  for (let i = count0; i < count0 + count1; i++) {
    arr[i] = 1;
  }

  for (let i = count0 + count1; i < count0 + count1 + count2; i++) {
    arr[i] = 2;
  }

  return arr;
};

console.log("Test Case 1 Approach 2:", sort012Approach2(testCase1));
console.log("Test Case 2 Approach 2:", sort012Approach2(testCase2));


function sort012Approach3(arr) {
  let low = 0, mid = 0, high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      mid++;
      low++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
};

console.log("Test Case 1 Approach 3:", sort012Approach3(testCase1));
console.log("Test Case 2 Approach 3:", sort012Approach3(testCase2));
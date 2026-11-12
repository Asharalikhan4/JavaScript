/*
Question: Given an unsorted array of integers find a pair with given sum in it or Algorithm to find a pair of integers in unsorted array with a given sum k. Algorithm to find a pair of integers in unsorted array with a given sum k.
*/

let arr = [15, 4, 9, 3, 2, 12, 11, 14, 21, 24, 1, 10];
k = 25;

function solution(arr, k) {
  const hashMap = new Map();
  for (let [index, num] of arr.entries()) {
    const left = k - num;
    if (hashMap.has(left)) {
      return [hashMap.get(left), index]
    }
    hashMap.set(num, index)
  }
  return [];
};

console.log("Array Indexes", (solution(arr, k)))
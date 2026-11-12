/*
Problem Statement -> Given a unsorted array arr[] of positive integers having all the numbers occurring exactly twice, except for one number which will occur only once. Find the number occurring only once.

Approach 1 (Brute Force Approach) -> Use the nested loop, for each element iterate over the array and check the count of that element if it exist more then 2 times then it is not.

Approach 2 (Better Approach) -> Use hashmap to count the frequency of element present in the array.

Appraoach 3 (Optimal Approach) -> Use XOR operator, XOR of same element is zero, and any element XOR with 0 will be number itself.
*/

let testCase1 = [1, 2, 1, 5, 5];
let testCase2 = [2, 30, 2, 15, 20, 30, 15];


function numberThatAppearOnceApproach1(arr) {
  
}

function numberThatAppearOnceApproach2(arr) {
  
}

function numberThatAppearOnceApproach3(arr) {
  /*
    T.C -> O(N)
    S.C -> O(1)
  */
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  };
  return ans;
};

console.log("Approach 3 test case 1 result", numberThatAppearOnceApproach3(testCase1))
console.log("Approach 3 test case 2 result", numberThatAppearOnceApproach3(testCase2))
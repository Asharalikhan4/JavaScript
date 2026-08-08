/*
Problem Statement: There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.
*/

let testCase1 = [1, 2, -4, -5];
// output - [1, -4, 2, -5];
let testCase2 = [3, 1, -2, -5, 2, -4];
// output - [1, -3, 2, -1, 0, -2, 0, -3]

/*
- Brute Force Approach
- TC - O(N)
- SC - O(N)
*/

function reArrangeArrayElementBySignApproach1(arr) {
  let n = arr.length, positiveValueArr = [], negativeValueArr = [], answerArray;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      positiveValueArr.push(arr[i]);
    } else {
      negativeValueArr.push(arr[i]);
    }
  }
  for (let i = 0; i < n; i++) {
    answerArray[2*i] = positiveValueArr[i];
    answerArray[2 * i + 1] = negativeValueArr[i];
  };
  return answerArray;
};

console.log(
  "Brute Force Approach, Test case 1: ",
  reArrangeArrayElementBySignApproach2(testCase1),
);
console.log(
  "Brute Force Approach, Test case 2: ",
  reArrangeArrayElementBySignApproach2(testCase2),
);

/*
- Optimal Approach
- TC - O(N)
- SC - O(N)
*/

function reArrangeArrayElementBySignApproach2(arr) {
  const n = arr.length;
  const ans = new Array(n).fill(0);
  let posIndex = 0;
  let negIndex = 1;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      ans[posIndex] = arr[i];
      posIndex += 2;
    } else {
      ans[negIndex] = arr[i];
      negIndex += 2;
    }
  }
  return ans;
};

console.log(
  "Optimal Approach, Test case 1: ",
  reArrangeArrayElementBySignApproach2(testCase1),
);
console.log(
  "Optimal Approach, Test case 2: ",
  reArrangeArrayElementBySignApproach2(testCase2),
);
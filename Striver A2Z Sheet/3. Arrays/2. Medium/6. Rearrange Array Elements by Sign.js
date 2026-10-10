/*
Problem Statement: There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

Approach 1 -> Take two array negValueArray and posValueArray, now seperate the values accordingly from the main array and make a new array while taking the values from the posValueArray and negValueArray one by one, start from posValueArray, positive value will take odd index and negative value will take even index.

Approach 2 -> In this we'll take one new array and two pointer to insert value one pointer will have initial value as 0 and other will have 1 and iterate over the given array and keep on checking weather the current element is positive or negative as the number come we push the number at the pointer index and will inc the pointer by 2.
*/

let testCase1 = [1, 2, -4, -5];
// output - [1, -4, 2, -5];
let testCase2 = [3, 1, -2, -5, 2, -4];
// output - [1, -3, 2, -1, 0, -2, 0, -3]


function reArrangeArrayElementBySignApproach1(arr) {
  /*
    T.C -> O(N + N),
    S.C -> O(N)
  */
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

function reArrangeArrayElementBySignApproach2(arr) {
  /*
    T.C -> O(N)
    S.C -> O(N)
  */
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
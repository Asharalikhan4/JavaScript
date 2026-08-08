/*
Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
*/

function maximumConsecutiveOnesApproach1(arr) {
  let highestOnesCount = 0, currentOnesCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentOnesCount = currentOnesCount + 1;
    } else {
      currentOnesCount = 0;
    }
    if (currentOnesCount > highestOnesCount) {
      highestOnesCount = currentOnesCount;
    }
  }
  return highestOnesCount;
};

let testCase1Approach1 = [1, 1, 0, 1, 1, 1];
console.log("Test case 1 approach 1 result:", maximumConsecutiveOnesApproach1(testCase1Approach1))
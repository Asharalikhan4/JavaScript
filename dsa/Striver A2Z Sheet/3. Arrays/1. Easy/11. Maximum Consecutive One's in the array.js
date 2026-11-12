/*
Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

Approach 1 -> Keep two variable, start iterating over array and keep checking weather the element is 1 or not, is yes inc the first variable and do the same till you getting the one and as soon as you encounter the variable other then 1 then check weather the current 1's count is higher then the value stored in second variable if yes change he second variable with the current value and if not then keep as it is.
*/

function maximumConsecutiveOnesApproach1(arr) {
  /*
    T.C - O(N)
    S.C - O(1)
  */
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
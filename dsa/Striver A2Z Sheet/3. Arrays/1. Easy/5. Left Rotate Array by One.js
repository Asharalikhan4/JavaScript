/*
Problem Statement -> Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.
Note: Consider the array as circular.

Approach 1 -> 

*/

function leftRotateArrayByOne(arr) {
  /*
    T.C -> O(N)
    S.C -> O(1)
  */
  arr.push(arr.shift())
  return arr;
};

let testCase1 = [1, 2, 3, 4, 5];
let testCase2 = [1,2,3,4,5,6,7]

console.log("Test Case 1 result:", leftRotateArrayByOne(testCase1))


/*
Follow Up Question -> What if no of rotation is given in the question.

Note: An array rotated by the no of it's own length will become the same array again, so what you can do is rotation = rotation % arrayLength

Approach 1 -> We use the same approach as above and simply run the number of times as given input.

Approach 2 (Optimized) -> 
*/

function rotateArrayByKApproach1(arr, k) {
  /*
    T.C -> O(N*K)
    S.C -> O(1)
  */
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    arr.push(arr.shift())
  };
  return arr;
};

console.log("Rotate Array by K Approach 1 Test Case 1:", rotateArrayByKApproach1(testCase2, 3))
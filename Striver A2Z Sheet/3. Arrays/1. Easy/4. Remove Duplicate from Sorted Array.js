/*
Approach 1 -> We can use set, as set only stores the unqiue value, we push all the value of array in set and the make a new array with the value of set and return.
Approach 2 ->
*/

function removeDuplicates(arr) {
  let i = 0, n = arr.length;
  for (let j = 1; j < n; j++) {
    if (arr[i] != arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
};

let testarr1 = [1, 1, 2];
let testarr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log("Test Case 1:", removeDuplicates(testarr1));
console.log("Test Case 2:", removeDuplicates(testarr2));
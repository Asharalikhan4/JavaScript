/*
Problem Statement -> Given an array arr[]. Find the majority element in the array. If no majority element exists, return -1.
Note: A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.

Approach 1 -> take a hashmap and iterate over array for each element check weather it is in hashmap or not, if yes then increment it's value if not then push that element with value 1, after this step, run one more loop over array and use array element as keys and check which has value greater then arr.length/2 (take floor value) and return the key of it.

Approach 2 (Moore's Voting Algo) -> In this we have iterate over array with the logic if counter is zero then assing the first element and count to 1, and then in each iteration check weather current element is equal to selected element if yes inc the counter else dec the counter and at last confirm the element by checking the occurence of element we got from above algo and then check weather it is greater then n/2(n = arr.length) if yes return the num otherwise return -1;
*/

let testCase1 = [1, 1, 2, 1, 3, 5, 1];
let testCase2 = [7];
let testCase3 = [2, 13];

function majorityElementApproach1(arr) {
  /*
    T.C -> O(2N)
    S.C -> O(N)
  */
  let map = new Map();
  let maxShouldBe = Math.floor(arr.length / 2);
  let majorElement = -1;
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) > maxShouldBe) {
      majorElement = arr[i];
    };
  };

  return majorElement;
};

console.log("Test Case 1 Approach 1", majorityElementApproach1(testCase1));
console.log("Test Case 2 Approach 1", majorityElementApproach1(testCase2));
console.log("Test Case 3 Approach 1", majorityElementApproach1(testCase3));

function majorityElementApproach2(arr) {
  /*
    T.C -> O(N)
    S.C -> O(1)
  */
  let count = 0, element = 0;
  for (let num of arr) {
    if (count === 0) {
      count = 1;
      element = num;
    } else if (num === element) {
      count++;
    } else {
      count--;
    }
  }

  let counter1 = arr.filter(num => num === element);
  if (counter1.length > Math.floor(arr.length / 2)) {
    return element;
  };
  return -1;
};

console.log("Test Case 1 Approach 2", majorityElementApproach2(testCase1));
console.log("Test Case 2 Approach 2", majorityElementApproach2(testCase2));
console.log("Test Case 3 Approach 2", majorityElementApproach2(testCase3));

/*
Problem Statement: You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters.
If two or more characters have same frequency then arrange them in alphabetic order.

Approach 1 -> we will take a hashmap for storing the frequency of the each character, then we will make those key value as an array of two elements and all these small array of two elements will be in a single array, then we sort this array and then we map this array with second element will be repeated by the number of first element then join the result array.
*/

let testCase1Str1 = "tree";
// Output: eert

function sortCharacterByFrequencyApproach1(str) {
  /*
    T.C -> O(N+KlogK)
    S.C -> O(N)
  */
  const mappingStore = new Map();
  for (let i = 0; i < str.length; i++) {
    if (mappingStore.has(str[i])) {
      mappingStore.set(str[i], mappingStore.get(str[i]) + 1);
    } else {
      mappingStore.set(str[i], 1);
    }
  };
  const entries = [...mappingStore.entries()];
  console.log("entires", entries)
  entries.sort((a, b) => b[1] - a[1]);
  const resultArr = entries.map(item => item[0].repeat(item[1]));
  return resultArr.join("");
};

console.log(
  "Test Case 1 Approach 1",
  sortCharacterByFrequencyApproach1(testCase1Str1),
);

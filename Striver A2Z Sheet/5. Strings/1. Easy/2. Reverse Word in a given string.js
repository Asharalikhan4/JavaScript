/*
Problem Statement: Given an input string, containing upper-case and lower-case letters, digits, and spaces( ' ' ). A word is defined as a sequence of non-space characters. The words in s are separated by at least one space. Return a string with the words in reverse order, concatenated by a single space.

Approach 1 -> Trim the extra spaces, split the string from spaces, now reverse the array returned by split, and then join this array with spaces.

Approach 2 -> Same approach as 1 but without using the predefined functions.
*/

let testCase1 = "welcome to the jungle";
// Output: "jungle the to welcome"
let testCase2 = " amazing coding skills ";
// Output: " amazing coding skills "

function reverseWordsInAGivenStringApproach1(str) {
  /*
    T.C -> O(N),
    S.C -> O(N)
  */
  return str.trim("").split(" ").reverse().join(" ");
};

console.log("Test Case 1, Approach 1 Result:", reverseWordsInAGivenStringApproach1(testCase1));
console.log("Test Case 2, Approach 1 Result:", reverseWordsInAGivenStringApproach1(testCase2));

function reverseWordsInAGivenStringApproach2(str) {
  /*
    T.C -> O(N*N)
    S.C -> O(N)
  */
  let words = [];
  let word = "";

  for (let ch of str) {
    if (ch !== " ") {
      word += ch;
    } else if (word.length > 0) {
      words.push(word);
      word = "";
    }
  }
  if (word.length > 0) {
    words.push(word);
  }
  let start = 0, end = words.length - 1;
  while (start <= end) {
    let temp = words[start];
    words[start] = words[end];
    words[end] = temp;
    start++;
    end--;
  }
  let answer = "";
  for (let i = 0; i < words.length; i++){
    answer += words[i] + " "
  }
  return answer;
};

console.log("Test Case 1, Approach 2 Result:", reverseWordsInAGivenStringApproach2(testCase1));
console.log("Test Case 2, Approach 2 Result:", reverseWordsInAGivenStringApproach2(testCase2));
/*
This question was asked in Adobe’s SDE2 frontend interview.

The problem statement reads as – Create composeAsync function that will compose async function with chaining support.

These interviews questions evaluate when your understanding of closure and the async operations.

Example
Input:
function a(x, y) {
  return new Promise(resolve => setTimeout(() => resolve(x * y), 100));
}

function b(z) {
  return new Promise((resolve, reject) => setTimeout(() => resolve(z + 5), 100));
}

function c(r) {
  return new Promise(resolve => setTimeout(() => resolve(r / 10), 100));
}

// create this function
composeAsync(c, b, a)(5, 3).then(result => { console.log(result); }).catch(console.error);

Output:
// 2

Related Link - https://leetcode.com/discuss/post/6938276/adobe-mts-2-interview-experience-fe-by-a-5h33/
*/

function composeAsyncFunction() {
  
};


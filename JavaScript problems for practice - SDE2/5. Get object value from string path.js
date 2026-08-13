/*
This question was asked in Amazon's frontend interview.

Implement a method in Javascript that will take an object and a string or array of strings as a path and return the value at that path. If nothing is found return undefined. Polyfill for lodash._get().

Example
Input:
const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
};

console.log(get(obj, 'a.b.c')); 
console.log(get(obj, 'a.b.c.0')); 
console.log(get(obj, 'a.b.c[1]')); 
console.log(get(obj, 'a.b.c[3]')); 


Output:
// [1,2,3]
// 1
// 2
// undefined

Related Link - https://leetcode.com/discuss/post/776553/amazonaws-fee-phone-interview-august-how-899j/
*/

const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
};
const str = "a.b.c";

function returnRequiredValue(obj, str) {
  let strPath = str.split(".");
  let result = obj;
  while (strPath.length > 0) {
    const currentPath = strPath.shift();
    result = result[currentPath];
  }
  return result;
};

console.log(returnRequiredValue(obj, str));

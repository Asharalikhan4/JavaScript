/*
This question was asked in Adobe's SDE2 frontend interview and Impact Analytic's SSE frontend interview.

Given an nested object which can have any type of value, deep flatten it on the dot notation and return the new object.

Example
Input:
const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }   
};

console.log(flatten(nested));

Output:
{
  "A": "12"
  "B": 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0": 1,
  "C.Q.1": 2,
}
*/

const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }   
};

function flatten(nestedObj, result = {}) {
  console.log(Object.keys(nestedObj), Object.values(nestedObj));
  for (let key of Object.keys(nestedObj)) {
    if (typeof nestedObj[key] === "object") {
      
    } else {
      result[key] = nestedObj[key];
    }
  }
};

console.log(flatten(nested));
/*
Output{
  "A": "12"
  "B": 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0": 1,
  "C.Q.1": 2,
}
*/
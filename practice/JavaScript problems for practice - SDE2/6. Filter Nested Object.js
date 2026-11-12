/*
This question was asked in Amazon's frontend interview

Create a function in javascript which will take a nested object and a filter function as input and return the filtered object.

Input:
const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
     f: {
       g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";

Output:
{
  b: {
    c: "Hello World",
    h: "Good Night Moon",
  }
};

Related Link - https://leetcode.com/discuss/post/328553/amazon-phone-screen-deep-filter-by-anony-77xv/
*/

function filterNestedObject(obj, filterFn) {
  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "object" && !Array.isArray(val)) {
      filterNestedObject(val, filterFn);
    } else {
      if (filterFn(val) === false) {
        delete obj[key];
      }
    }
    if (JSON.stringify(val) === "{}") {
      delete obj[key];
    }
  }
  return obj;
};

const obj = {
  a: [1, 2, 3],
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";

console.log(filterNestedObject(obj, filter));

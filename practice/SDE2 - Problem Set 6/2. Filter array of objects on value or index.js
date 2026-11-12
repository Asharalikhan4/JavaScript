/*
Implement a function in JavaScript that filters an array of objects based on the value or index.

Example
Input:
const arr = [
  { name: "Amir", id: "1" },
  { name: "Samlan", id: "2" },
  { name: "Shahrukh", id: "0" },
];

console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "Amir")); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }

Note: You have to treat numeric values as index.
*/

function filterArrayOfObject(arr, filter) {
  if (typeof filter === "string") {
    for (const entry of arr) {
      for (const [key, val] of Object.entries(entry)) {
        if (val === filter) {
          return entry;
        }
      }
    }
  } else if (filter in arr) {
    return arr[filter]
  } else {
    return undefined;
  }
}

const arr = [
  { name: "Amir", id: "1" },
  { name: "Samlan", id: "2" },
  { name: "Shahrukh", id: "0" },
];

console.log(filterArrayOfObject(arr, 0));
console.log(filterArrayOfObject(arr, "Amir"));
console.log(filterArrayOfObject(arr, "0"));
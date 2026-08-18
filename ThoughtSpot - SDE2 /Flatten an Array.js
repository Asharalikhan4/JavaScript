/*
Write a polyfill without using ES6 features to flatten an N depth array.

Flattening an array is simple process of merging different N dimensional sub arrays to form a single array.

Example:
Input:
[[[1, [1.1]], 2, 3], [4, 5]]

Output:
[1, 1.1, 2, 3, 4, 5]
*/

/*
Normal Approach
*/
function normalFlatten(arr) {
    let flattenArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
            flattenArray.push(...normalFlatten(arr[i]));
        } else {
            flattenArray.push(arr[i]);
        }
    }
    return flattenArray;
};

/*
Prototype Approach
*/
Array.prototype.customFlatten = function () {
    let flattenArray = [];
    for (let i = 0; i < this.length; i++) {
        if (Object.prototype.toString.call(this[i]) === "[object Array]") {
            flattenArray.push(...this[i].customFlatten());
        } else {
            flattenArray.push(this[i]);
        }
    }
    return flattenArray;
};

/*
Follow Up: And Suppose you want to add the depth parameter like the default function
*/
Array.prototype.customFlattenWithDepth = function (depth = 1) {
    let flattenArray = [];
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth > 0) {
            flattenArray.push(...this[i].customFlatten(depth - 1));
        } else {
            flattenArray.push(this[i]);
        }
    }
    return flattenArray;
};

/*
or in the place of Array.isArray(arr), you can also use Object.prototype.toString.call(v)==="[object Array]"
*/

let testCase1 = [[[1, [1.1]], 2, 3], [4, 5]];
console.log("Polyfill Without Depth :", testCase1.customFlatten());
console.log("Polyfill With Depth :", testCase1.customFlattenWithDepth(2));
console.log("Normal", normalFlatten(testCase1));
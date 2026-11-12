/*
This question was asked in the Meta’s frontend interview and Thoughtspot's frontend interview and MakeMyTrip's frontend interview and JobTwine's frontend interview.

Write a polyfill without using ES6 features to flatten an N depth array.

Flattening an array is simple process of merging different N dimensional sub arrays to form a single array.

Example:

Input:
[[[1, [1.1]], 2, 3], [4, 5]]

Output:
[1, 1.1, 2, 3, 4, 5]

Related Links
- https://leetcode.com/discuss/post/5027017/meta-ic5-e5-frontend-london-rejected-by-m7988/
- https://leetcode.com/discuss/post/4867656/ThoughtSpot-MTS-Frontend-Role-Interview-Experience/
- https://leetcode.com/discuss/post/7150898/mmt-sse-2frontend-interview-experience-b-vwdg/
- https://leetcode.com/discuss/post/7258044/interview-experience-of-frontend-develop-lcjj/
*/

const flattenUsingES6 = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
};

function flatten(arr, result = []) {
    for(let i = 0, length = arr.length; i < length; i++) {
        if(Array.isArray(arr[i])) {
            flatten(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
};

const arr = [[[1, [1.1]], 2, 3], [4, 5]];
console.log(flatten(arr));
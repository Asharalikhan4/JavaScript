/*
This question was asked in Impact Analytic's SSE frontend interview.

Create a JavaScript function that returns the sum of the previous values.

Example
const sum = curry();
sum(5); // 5
sum(3); // 8
sum(4); // 12
sum(0); // 12

Related Links
- https://leetcode.com/discuss/post/8139832/senior-software-engineer-frontend-impact-32zc/
*/

function curry() {
    let sum = 0;
    return function(num = 0) {
        sum += num;
        return sum;
    };
};

const sum = curry();
console.log(sum(5))
console.log(sum(3))
console.log(sum(4))
console.log(sum(0))
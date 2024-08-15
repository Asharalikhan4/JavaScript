// Modules protect their function and variables from leaking into the global scope.

let x = "Calculate Sum";
function calculateSum(a, b) {
    console.log(a + b);
};

// if you have single export use below line
// module.exports = calculateSum;

module.exports = {
    x: x,
    calculateSum: calculateSum
};
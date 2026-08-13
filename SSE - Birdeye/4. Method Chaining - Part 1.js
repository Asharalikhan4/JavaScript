/*
Explain method chaining in JavaScript by implementing a calculator that performs the basic actions like add, subtract, divide, and multiply.

A similar question was asked in Birdeye's SSE frontend interview.

Example 1
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);
//20


Example 2
const sum = read(10, 5).sum();
console.log(sum); // 15

const multiply = read(10, 5).multiply();
console.log(multiply); // 50

Note: You have to implement the solution that solves the problem. There are no test cases to this. Test it yourself using the example test cases.
*/

// Functional Based Approach
const functionalCalculator = {
  total: 0,
  add: function (val) {
    this.total += val;
    return this;
  },
  subtract: function (val) {
    this.total -= val;
    return this;
  },
  divide: function (val) {
    this.total /= val;
    return this;
  },
  multiply: function (val) {
    this.total *= val;
    return this;
  }
};

functionalCalculator.add(10).subtract(2).divide(2).multiply(5);
console.log(functionalCalculator.total);
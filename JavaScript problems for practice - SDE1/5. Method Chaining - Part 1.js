/*
Explain method chaining in JavaScript by implementing a calculator that performs the basic actions like add, subtract, divide, and multiply.

Example
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);
//20
*/

const calculator = {
    total: 0,
    add: function(val) {
        this.total += val;
        return this;
    },
    subtract: function(val) {
        this.total -= val;
        return this;
    },
    divide: function(val) {
        this.total /= val;
        return this;
    },
    multiply: function(val) {
        this.total *= val;
        return this;
    }
};

calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);
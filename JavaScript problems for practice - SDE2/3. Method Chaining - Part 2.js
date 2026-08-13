/*
This question was asked in NAVI's SDE2 frontend interview.

Showcase a working demo of method chaining in JavaScript by implementing the following example.

Example
Input:
computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();

Output:
143545000

Related Link - https://leetcode.com/discuss/post/2569900/navi-ui-engineer-2-bangalore-july-2022-o-b7ar/
*/

// Class Based Approach
class ComputeAmount {
  constructor() {
    this.initialValue = 0;
  }

  lacs(value) {
    this.initialValue += value * 100000;
    return this;
  }

  crore(value) {
    this.initialValue += value * 10000000;
    return this;
  }

  thousand(value) {
    this.initialValue += value * 1000;
    return this;
  }

  value() {
    return this.initialValue;
  }
}

const computeAmount = new ComputeAmount();
console.log(
  computeAmount
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value(),
);

// Function Based Approach
const ComputeAmountFn = function () {
  this.initialValue = 0;

  this.crore = function (val) {
    this.store += val * Math.pow(10, 7);
    return this;
  };

  this.lacs = function (val) {
    this.store += val * Math.pow(10, 5);
    return this;
  };

  this.thousand = function (val) {
    this.store += val * Math.pow(10, 3);
    return this;
  };

  this.hundred = function (val) {
    this.store += val * Math.pow(10, 2);
    return this;
  };

  this.ten = function (val) {
    this.store += val * 10;
    return this;
  };

  this.unit = function (val) {
    this.store += val;
    return this;
  };

  this.value = function () {
    return this.store;
  };
};

const computeAmountFn = new ComputeAmountFn();
const amount = computeAmount
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();
console.log(amount);

// Using function as Closure
const ComputeAmountClosure = function () {
  return {
    store: 0,
    crore: function (val) {
      this.store += val * Math.pow(10, 7);
      return this;
    },

    lacs: function (val) {
      this.store += val * Math.pow(10, 5);
      return this;
    },

    thousand: function (val) {
      this.store += val * Math.pow(10, 3);
      return this;
    },

    hundred: function (val) {
      this.store += val * Math.pow(10, 2);
      return this;
    },

    ten: function (val) {
      this.store += val * 10;
      return this;
    },

    unit: function (val) {
      this.store += val;
      return this;
    },

    value: function () {
      return this.store;
    },
  };
};

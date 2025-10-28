// We'll see function currying using two ways, using bind and closures.
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5)
/*
Write a function add() that satisfies the following.

Example
add(1)(2).value() = 3;
add(1, 2)(3).value() = 6;
add(1)(2)(3).value() = 6;
add(1)(2) + 3 = 6;

The add() method can accept any number of arguments and processed value is returned only when .value() method is invoked or operation with any primitive value is being done as you can see in the example.

Followup: The add() method can take single argument add(1) or an array of arguments add([1, 2, 3, 4]).
*/

function add(...x) {
  let sum = x;
  function resultFn() {
    sum = [...sum, ...x];
    return resultFn;
  }

  resultFn.valueOf = function () {
    return sum.reduce((a, b) => a + b, 0);
  };

  resultFn.value = resultFn.valueOf;
  return resultFn;
};

console.log(add(1)(2).value() == 3); 
console.log(add(1, 2)(3).value() == 6); 
console.log(add(1)(2)(3).value() == 6); 
console.log(add(1)(2) + 3);

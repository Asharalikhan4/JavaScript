// Parameterised Way
function printSumOfFirstNParameterisedWay(n, sum = 0) {
  if (n === 0) {
    console.log(sum);
    return;
  };
  printSumOfFirstNParameterisedWay(n - 1, sum + n);
};
printSumOfFirstNParameterisedWay(5);


// Functional Way
function printSumOfFirstNFunctionalWay(n) {
  if (n === 1) {
    return 1;
  };
  return n + printSumOfFirstNFunctionalWay(n - 1);
};
console.log(printSumOfFirstNFunctionalWay(5))
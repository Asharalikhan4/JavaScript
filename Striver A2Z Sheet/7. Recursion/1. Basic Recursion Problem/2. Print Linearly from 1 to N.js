let n = 10;

function printOneToN(n) {
  if (n === 0) {
    return;
  };
  printOneToN(n - 1);
  console.log(n);
  return;
};

printOneToN(n);

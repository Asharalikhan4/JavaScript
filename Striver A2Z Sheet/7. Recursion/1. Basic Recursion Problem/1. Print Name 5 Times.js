let n = 5;

function printName(n) {
  if (n == 0) {
    return;
  }
  console.log("Recursion");
  return printName(n - 1);
};

printName(n);

/*
SC -> O(N)
TC -> O(N)
*/
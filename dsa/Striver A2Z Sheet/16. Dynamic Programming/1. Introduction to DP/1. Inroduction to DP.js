// Memoization
function fibonacciMemoization(n, memo = []) {
  if (n <= 1) return n;
  if (memo[n]) {
    return memo[n];
  }
  return (memo[n] =
    fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo));
}

console.log("Fibonacci Memoization", fibonacciMemoization(5));

// Tabulation
function fibonacciTabulation(n) {
  let prev2 = 0,
    prev = 1;
  for (let i = 2; i <= n; i++) {
    let curr = prev + prev2;
    prev2 = prev;
    prev = curr;
  }
  return prev;
}

console.log("Fibonacci Tabulation", fibonacciTabulation(5));

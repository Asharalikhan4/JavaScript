/*
This question was asked in Atlassian’s principal engineer interview (P60) and Razorpay's Interview.

Create an async function measurePeformance() that will take the function (async or sync) as input whose performance has to be evaluated.

Example sync function
Input:
// normal function
const syncFunction = () => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  return sum;
};

// measure performance of the normal function
measurePerformance(syncFunction, {
  name: 'Sync Calculation',
  iterations: 5,
  warmup: true
});

Output:
"Performance Results for Sync Calculation:"
"----------------------------------------"
"Type: Sync"
"Iterations: 5"
"Average: 10.00ms"
"Min: 9.00ms"
"Max: 11.00ms"
"----------------------------------------"

Example async Function
Input:
// async function
const asyncFunction = async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return 'done';
};

// measure performance of the async function
measurePerformance(asyncFunction, {
  name: 'Async Calculation',
  iterations: 5,
  warmup: true
});

Output:
"Performance Results for Async Calculation:"
"----------------------------------------"
"Type: Async"
"Iterations: 5"
"Average: 105.60ms"
"Min: 104.00ms"
"Max: 107.00ms"
"----------------------------------------"

The measurePeformance() will take following props as input:
other props like:
- name: The name of the function or the default alias for the anonymous functions.
- iterations: Number of time the function should be invoked, helps to get the average computation time with high and low time.
- warmup: This flag will be used to run the function once to make sure it is not throwing any error before starting the performance test.
- logResults: This flag will be used to determine if we have to log the results or not.

Compare performance of two or more functions
Extend the measurePerformance function and create a comparePerformance function that will take two or more functions and compare there performance.

Testcase
Input:
// async function
const asyncFunction = async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return 'done';
};

// normal function
const syncFunction = () => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  return sum;
};

// compare two functions
comparePerformance([
  { fn: syncFunction, name: 'Sync Calculation' },
  { fn: asyncFunction, name: 'Async Operation' }
], {
  iterations: 5,
  warmup: true
});

Output:
"Performance Results for Sync Calculation:"
"----------------------------------------"
"Type: Sync"
"Iterations: 5"
"Average: 2.40ms"
"Min: 2.00ms"
"Max: 3.00ms"
"----------------------------------------"

"Performance Results for Async Operation:"
"----------------------------------------"
"Type: Async"
"Iterations: 5"
"Average: 104.40ms"
"Min: 100.00ms"
"Max: 113.00ms"
"----------------------------------------"

"Performance Comparison:"
"----------------------------------------"
"1. Sync Calculation:"
"   Average: 2.40ms"
"   Min: 2.00ms"
"   Max: 3.00ms"

"2. Async Operation:"
"   Average: 104.40ms"
"   Min: 100.00ms"
"   Max: 113.00ms"
"----------------------------------------"

Note: You have to implement the functions measurePeformance() and comparePerformance() that solves the problem. There are no testcases to this. Test it yourself using the sample testcases.

Related Link - https://leetcode.com/discuss/post/6769058/atlassian-principal-frontend-engineer-p6-b0h2/
*/

async function measurePerformance(fn, options = {}) {
  const {
    name = fn.name || "Anonymous Function",
    iterations = 1,
    warmup = true,
    logResults = true,
  } = options;

  const results = {
    name,
    iterations,
    isAsync: fn.constructor.name === "AsyncFunction",
    timings: [],
    average: 0,
    min: Infinity,
    max: -Infinity,
    total: 0,
  };

  if (warmup) {
    try {
      await fn();
    } catch (error) {
      console.warn(`Warmup run failed for ${name}:`, error);
    }
  }

  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    try {
      await fn();
    } catch (error) {
      console.error(`Error in iteration ${i + 1} for ${name}:`, error);
      continue;
    }
    const end = performance.now();
    const duration = end - start;

    results.timings.push(duration);
    results.min = Math.min(results.min, duration);
    results.max = Math.max(results.max, duration);
    results.total += duration;
  }

  results.average = results.total / results.timings.length;

  if (logResults) {
    console.log(`\nPerformance Results for ${name}:`);
    console.log("----------------------------------------");
    console.log(`Type: ${results.isAsync ? "Async" : "Sync"}`);
    console.log(`Iterations: ${iterations}`);
    console.log(`Average: ${results.average.toFixed(2)}ms`);
    console.log(`Min: ${results.min.toFixed(2)}ms`);
    console.log(`Max: ${results.max.toFixed(2)}ms`);
    console.log("----------------------------------------\n");
  }

  return results;
}

// normal function
const syncFunction = () => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  return sum;
};

// async function
const asyncFunction = async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return 'done';
};

// measure performance of the sync function
measurePerformance(syncFunction, {
  name: "Sync Calculation",
  iterations: 5,
  warmup: true,
});


// measure performance of the async function
measurePerformance(asyncFunction, {
  name: 'Async Calculation',
  iterations: 5,
  warmup: true
});

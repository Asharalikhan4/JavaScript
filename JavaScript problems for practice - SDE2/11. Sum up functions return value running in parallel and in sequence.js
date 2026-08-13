/*
This interview question was asked in Intuit’s SDE2 frontend interview, where the user was asked to run functions in parallel and in sequence and evaluate there performance.

The problem statement reads as:

Write two functions:
A() returns 2 after 2 seconds
B() returns 3 after 3 seconds
Return their sum in two ways:
Parallel execution → Total time: 3 seconds
Sequential execution → Total time: 5 seconds

Testcase
const A = async () => {
  ... your code
}

const B = async () => {
  ... your code
}

const series = async () => {
  ... your code
  return resultA + resultB;
}

const parallel = async () => {
  ... your code
  return resultA + resultB;
}

const evaluate = async (fn, label) => {
  const startTime = performance.now();
  console.log(`Executing ${label} task starts...`);
  let result = await fn();
  const endTime = performance.now();
  console.log(`Task ${label} finished in ${ Number.parseInt(endTime - startTime) } milliseconds with sum:`, result);
}

Input:
evaluate(series, 'sequential');
evaluate(parallel, 'parallel');

Output:
"Task sequential starting..."
"Task parallel starting..."
"Task parallel finished in 3029 milliseconds with," sum
"Task sequential finished in 5011 milliseconds with," sum

Related Link - https://leetcode.com/discuss/post/6770567/intuit-senior-frontend-engineer-by-anony-x1a5/
*/

function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
}

function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 3000);
  });
}

const evaluate = async (fn, label) => {
  const startTime = performance.now();
  console.log(`Executing ${label} task starts...`);
  let result = await fn();
  const endTime = performance.now();
  console.log(
    `Task ${label} finished in ${Number.parseInt(endTime - startTime)} milliseconds with sum:`,
    result,
  );
};

async function series() {
  try {
    const result1 = await A();
    const result2 = await B();
    return result1 + result2;
  } catch (error) {
    console.error("There's some issue", error);
  }
}

async function parallel() {
  try {
    const result1 = A();
    const result2 = B();
    return (await result1) + (await result2);
  } catch (error) {
    console.error("There's some issue", error);
  }
}

evaluate(series, "series");
evaluate(parallel, "parallel");

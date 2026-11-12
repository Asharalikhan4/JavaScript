/*
Problem Statement -> An array of promises will be given that will either resolve (with number) or reject, If all the promises reject -> reject, else resolve with the sum of all resolved promises.
*/

const testCase1 = [
  Promise.resolve(10),
  Promise.reject("error"),
  Promise.resolve(20),
  Promise.reject("fail"),
  Promise.resolve(5),
];

const testCase2 = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
];

const testCase3 = [
  Promise.reject("err1"),
  Promise.reject("err2"),
  Promise.reject("err3"),
];

const testCase4 = [
  Promise.reject("x"),
  Promise.resolve(42),
  Promise.reject("y"),
];

function approach1(testCase1) {
  try {
    const result = await Promise.allSettled(testCase1);
    console.log(result);
  } catch (error) {
    console.error("There's some error: ", error);
  }
};

console.log(result);

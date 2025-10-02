/*
Write a function in JS that works similar to the original promise.
*/

const promise = new Promise((resolve, reject) => {
  // time consuming async operation
  // initial state will be pending
  
  // any one of the below operations can occur at any given time
  
  // this will resolve or fulfill the promise
  resolve('Hello, World!')
  
  // this will reject the promise
  reject('Error occurred')
});

// this will be invoked when the promise is resolved
promise.then((value) => {
  
});

// this will be invoked when the promise is rejected
promise.catch((error) => {
  
});

// this will be invoked when the promise is settled (resolved or rejected)
promise.finally(() => {
  
});

// Working of Promise
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello")
  }, 1000);
});

newPromise.then((value) => {
  console.log(value)
});

// Implementing a custom promise

const states = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2
};

const myPromise = 
# JavaScript Promises

Let see the most amazing feature that is introduced in ES6, what is promise in javascript?.

## Overview
Javascript is an asynchronous single-threaded programming language and to handle the asynchronous user interaction like click and keypress it used events.
```js
let button = document.getElementById("prashant");
button.onclick = function(event) {
    console.log("Clicked");
};
```
Nodejs further advanced asynchronous programming by implementing the concept of callbacks. Callback pattern works the same as the event but it can pass another function as an argument which needs to be executed.
```js
readFile("example.txt", function(err, contents) {
    if (err) {
        throw err;
    }
    console.log(contents);
});
console.log("Hi!");
```

This example shows how callbacks work in the Nodejs. The readFile() reads from a file on disk and then execute the callback (the second argument) when completed. It pass two arguments to the callback function err and contents. We can now use this argument to process further.

But handling nested callback function gets tedious as we need to track multiple callbacks and cleanup operations. It becomes callback hell when we nest multiple callbacks.
```js
method1(function(err, result) {
    if (err) {
        throw err;
    }
    method2(function(err, result) {
        if (err) {
            throw err;
        }
        method3(function(err, result) {
            if (err) {
                throw err;
            }
            method4(function(err, result) {
                if (err) {
                    throw err;
                }
                method5(result);
            });
        });
    });
});
```

Promises which are introduced in ES6 help us to handle such situations greatly. But exactly what is promise in javascript?.

## What is promise?
According to MDN:- A Promise is an object representing the eventual completion or failure of an asynchronous operation. Promise represent whether asynchronous code completed or failed and eventually returning its resulting value.
```js
let promise = readFile("example.txt");
promise.then(function(contents) {
    // fulfillment
    console.log(contents);
}, function(err) {
    // rejection
    console.error(err.message);
});

promise.then(function(contents) {
    // fulfillment
    console.log(contents);
});

promise.then(null, function(err) {
    // rejection
    console.error(err.message);
});
```

Javascript promise lifecycleEach Promise has a short lifecycle which represents the different state of execution of the asynchronous code.
    - **Pending:** Indicates that the asynchronous operation hasn’t completed yet. A pending promise is considered unsettled.
    - **Resolved / Fulfilled:** Indicates that the asynchronous operation has completed successfully.
    - **Rejected:** Indiactes that the asynchronous operation has failed due to error or some other cause.

A promise is considered to be settled when it is either in Resolved or Rejected state.

We can use then() method to track the current state of the Promise lifecycle. It gets called whenever Promise changes state.

The then() method takes two arguments. First argument is called when the promise is fullfilled and second argument is called when it is rejected. Both of the arguments are optional.

As soon as the Promise is returned it is in the pending state.
```js
let promise = readFile("example.txt");
```

When the asynchronous operation is completed successfully (fulfilled) without errors then the first argument of the then() is called.
```js
promise.then((content) => {
   //fulfilled
   console.log(content);
});
```

we can pass the second argument as well which handles the rejection.
```js
promise.then((content) => {
   //Fullfilled
   console.log(content);
}, (error) => {
   //rejected
   console.log(err);
});
```

When the code fails due to error or some other case then this state is called.
```js
promise.then(null, (error) => {
   //rejected
   console.log(err);
});
```

As the first argument always gets called when the operation is fulfilled we can pass null to omit it.

There is another catch() method which we can use along with then() to handle the errors. It works same as the then() method but only for rejected state.
```js
//Using then
promise.then(null, (error) => {
   //rejected
   console.log(err);
});

//Using catch
promise.catch((error) => {
   //rejected
   console.log(err);
});
```

Now we don't need to pass the null as the first argument, catch() will get called only for the rejected state.

## Creating custom promise
### Unsettled promise
We can create our custom promise using Promise constructor. It takes a function called executor as argument which initializes the promise.

The executors takes two arguments resolve() and reject(). When the executor is finished successfully then resolve() will be called. If there is any error then reject() will be called.
```js
const myPromise = new Promise((resolve, reject) => {
  // your code goes here
});
```

We can now use this promise to handle the execution of asynchronous code.
```js
let fs = require("fs");

const myPromise = new Promise((resolve, reject) => {
  // your code goes here
  fs.readFile(filename, { encoding: "utf8" }, function(err, contents) {

  // check for errors
  if (err) {
     reject(err);
     return;
  }

  // the read succeeded
  resolve(contents);

  });
});

let promise = myPromise("example.txt");

// listen for both fulfillment and rejection
promise.then((contents) => {
  // fulfillment
  console.log(contents);
}).catch((err) => {
  // rejection
  console.log(err);
});
```

### Handling errors with promise
The rejection handler handles the error that is thrown inside the executor function.
```js
let promise = new Promise(function(resolve, reject) {
    throw new Error("Explosion!");
});

promise.catch(function(error) {
    console.log(error.message);     // "Explosion!"
});
```

We can also explicity throw the error using try catch block.
```js
let promise = new Promise(function(resolve, reject) {
    try {
        throw new Error("Explosion!");
    } catch (ex) {
        reject(ex);
    }
});

promise.catch(function(error) {
    console.log(error.message);     // "Explosion!"
});
```

### Settled promise
If you want a promise to represent just a single known value, then there are two methods that create settled promises given a specific value.

The Promise.resolve() method accepts a single argument and returns a promise in the fulfilled state.
```js
let promise = Promise.resolve(42);

promise.then(function(value) {
    console.log(value);         // 42
});
```

It works same as the Promise.resolve() but it returns the promise in the rejected state.
```js
let promise = Promise.reject(42);

promise.catch(function(value) {
    console.log(value);         // 42
});
```

### Chaining promises
We can chain promises one after the other, using what was returned from the previous one as the base for the subsequent one, whether the promise resolved or got rejected.
```js
const myPromise = new Promise((resolve, reject) => {
  resolve();
});

myPromise
  .then(data => {
    // take the data returned and call a function on it
    return doSomething(data);
  })
  .then(data => {
    // log the data that we got from the previous promise
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```

We can return the value in the promise chain and it the returned value will be handled by the following chaining function.
```js
const myPromise = new Promise(function(resolve, reject) {
    resolve(42);
});

myPromise.then((value) => {
    console.log(value);         // "42"
    return value + 1;
}).then((value) => {
    console.log(value);         // "43"
    return value + 5;
}).then((value) => {
    console.log(value);         // "48"
}).catch((err) => {
    console.log(err);
});
```

We can do the same thing with the rejection handler as well as it will also return value.
```js
const myPromise = new Promise(function(resolve, reject) {
    reject(42);
});

myPromise.catch((value) => {
    // first fulfillment handler
    console.log(value);         // "42"
    return value + 1;
}).then((value) => {
    // second fulfillment handler
    console.log(value);         // "43"
});
```

### Returning Promises in Promise Chains
We can also return Promise from the another promise and then handle this based on its current state.
```js
let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
    resolve(43);
});

p1.then(function(value) {
    // first fulfillment handler
    console.log(value);     // 42
    return p2;
}).then(function(value) {
    // second fulfillment handler
    console.log(value);     // 43
});
```

As we can see the promise p1 is fulfilled and prints 42 then we returned the p2 from it which is further handled and prints 43.The second then() is listening to the returned promise p2. This is how it is executed.
```js
let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
    resolve(43);
});

let p3 = p1.then(function(value) {
    // first fulfillment handler
    console.log(value);     // 42
    return p2;
});

p3.then(function(value) {
    // second fulfillment handler
    console.log(value);     // 43
});
It simply attaches the then() handler to the returned promise.We can also create new promise and return it.let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

p1.then(function(value) {
    console.log(value);     // 42

    // create a new promise
    let p2 = new Promise(function(resolve, reject) {
        resolve(43);
    });

    return p2
}).then(function(value) {
    console.log(value);     // 43
});
```

### Handling multiple promise
We can handle multiple promises together with Promise.all() and Promise.race() which are provided by ES6.

#### Promise.all()
The Promise.all() method takes a single argument (an array of promises) and returns a promise which will be resolved when all the promises passed to it are resolved. The returned promise is fulfilled when every promise in the iterable is fulfilled.
```js
let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
    resolve(43);
});

let p3 = new Promise(function(resolve, reject) {
    resolve(44);
});

let p4 = Promise.all([p1, p2, p3]);

p4.then(function(value) {
    console.log(Array.isArray(value));  // true
    console.log(value[0]);              // 42
    console.log(value[1]);              // 43
    console.log(value[2]);              // 44
});
```

Each promises passed to the Promise.all() is resolved with a number. It will return the array of fulfilled values of each promises when all the promises are fulfilled. The values are returned in the order of the promises passed.

If any promise passed to Promise.all() is rejected, the returned promise is immediately rejected without waiting for the other promises to complete.
```js
let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
    reject(43);
});

let p3 = new Promise(function(resolve, reject) {
    resolve(44);
});

let p4 = Promise.all([p1, p2, p3]);

p4.catch(function(value) {
    console.log(Array.isArray(value))   // false
    console.log(value);                 // 43
});
```

#### Promise.race()
The Promise.race() method takes a single argument (an array of promises) and returns a promise which will be resolved when any of the promises passed to it are resolved. Instead of waiting for all promises to be fulfilled like the Promise.all() method, the Promise.race() method returns an appropriate promise as soon as any promise in the array is fulfilled.
```js
let p1 = Promise.resolve(42);

let p2 = new Promise(function(resolve, reject) {
    resolve(43);
});

let p3 = new Promise(function(resolve, reject) {
    resolve(44);
});

let p4 = Promise.race([p1, p2, p3]);

p4.then(function(value) {
    console.log(value);     // 42
});
```

As p1 is the settled promise it is returned as soon as it resolved. Other promises p2, p3 are unsettled promises.

#### Inheriting from promises
We can use promises as the base for the derived class. This will extend its capabilites.
```js
class MyPromise extends Promise {

    // use default constructor

    success(resolve, reject) {
        return this.then(resolve, reject);
    }

    failure(reject) {
        return this.catch(reject);
    }

}

let promise = new MyPromise(function(resolve, reject) {
    resolve(42);
});

promise.success(function(value) {
    console.log(value);             // 42
}).failure(function(value) {
    console.log(value);
});
```

Here our derived MyPromise class has our custom methods success and failure which we can use.
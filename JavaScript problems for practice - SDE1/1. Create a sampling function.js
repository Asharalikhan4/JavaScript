/*
This question was asked in ZETA's SDE1 Frontend interview.

Create a function in JavaScript that accepts a function as input and a count and executes that input function once for a given count of calls. Known as sampling function.

function message(){
  console.log("hello");
}

const sample = sampler(message, 4);
sample();
sample();
sample();
sample(); // this will be executed
sample();
sample();
sample();
sample(); // this will be executed
Note: You have to implement a function sampler that evaluates the above expression. There are no test cases to this. Test it yourself with different values.
*/

function samplingFunction(func, count, context) {
  let counter = 0;
  return function (...args) {
    context = this ?? context;
    if (++counter !== count) return;
    func.apply(context, args);
    counter = 0;
  }
}

function message() {
  console.log('Hello');
};

const sample = samplingFunction(message, 4);

sample()
sample()
sample()
sample()
sample()
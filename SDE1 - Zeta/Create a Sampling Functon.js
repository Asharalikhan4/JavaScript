/*
Problem Statement: Create a function in JavaScript that accepts a function as input and a count and executes that input function once for a given count of calls. Known as sampling function.

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
*/

function samplingFunction(fn, executionCount, context) {
    let counter = 0;
    return function (...args) {
        context = this ?? context;
        if (++counter !== executionCount) return;
        fn.apply(context, args);
        counter = 0;
    };
};

function greet() {
    console.log("Hey");
};

const sampling = samplingFunction(greet, executionCount = 4)

sampling()
sampling()
sampling()
sampling()
sampling()
sampling()
sampling()
sampling()
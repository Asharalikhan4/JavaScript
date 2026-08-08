/*
- A higher-order function (HOF) is a function that takes one or more functions as inputs, returns a function as output, or both. This idea lets you separate "what to do" (the callback) from "how to do it" (the control flow). In practice, Array.prototype.map, filter, and reduce are classic HOFs: you provide small functions that describe how to transform, select, or combine items, and the HOF handles iteration, indexing, and collection building. HOFs are central to functional programming patterns, enabling composition, reuse, and testable logic where side effects are limited and easy to locate.

- Beyond arrays, HOFs underpin event systems (registering handlers), async flows (then handlers, executor functions), and middleware/decorators (wrapping behavior to add cross-cutting concerns like logging, caching, and retry). Two related techniques often used with HOFs are partial application (pre-filling some arguments) and currying (turning a multi-argument function into a chain of one-argument functions). Used thoughtfully, HOFs reduce boilerplate and make data pipelines clear; used excessively, they can obscure simple logic behind many tiny layers. The balance is to encapsulate common patterns while keeping core steps explicit.

- Example // map, filter, reduce
*/

const nums = [1, 2, 3, 4];
const squares = nums.map((n) => n * n);
const evens = nums.filter((n) => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);

/*
once: call a function only the first time
*/
function callOnlyOnce(fn) {
    let isCalled = false, value;
    return function (...args) {
        if (!isCalled) {
            isCalled = true;
            value = fn.apply(this, args);
        };
        return value;
    };
};

const greet = () => {
    console.log("--- Original function executed! ---");
    return "Hello World";
};

const totalOnce = callOnlyOnce(greet);
totalOnce();
totalOnce();

/*
Curry for two arguement function
*/

function curry2(fn) {
    return (a) => (b) => fn(a, b);
};

const add = (x, y) => x + y;
const add2 = curry2(add);
add2(3)(4); // 7

/*
- Common misconceptions
    1. HOFs are only for arrays. They appear anywhere you pass or return functions (events, promises, middleware).
    2. Currying and partial application are identical. Currying makes N unary functions; partial application fixes some arguments in place.
    3. HOFs are always slower. In real apps, clarity and maintainability outweigh micro-overheads; measure before optimizing.
*/

/*
Coding: Implement a compose(...fns) utility that composes functions right-to-left; test with simple math functions.
*/

function compose() {

};

/*
Coding Question: Implement a memoize(fn) that caches results based on arguments for pure functions.
*/

function memoizeFn(fn) {
    let cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if(cache.has(key)) {
            console.log("Returning from cache", cache.get(key));
            return;
        };
        const result = fn.apply(this, args);
        cache.set(key, result);
        console.log("Fresh Calculation:", result);
    };
};

function addTwoNum(a, b) {
    return a + b;
};

const memoizeAdd = memoizeFn(addTwoNum);
memoizeAdd(1, 2);
memoizeAdd(1, 2);
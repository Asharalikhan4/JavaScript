/*
- Currying in JavaScript is a concept of functional programming in which we can pass functions as arguments (callbacks) and return functions without any side effects (Changes to program states).

# What is currying?
- In simple terms, in currying we return a function for each function invoked which excepts next argument inline. With the help of currying we can transform a function with multiple arguments into a sequence of  nesting functions.

# Example
//normal function
sum(1, 2, 3)
//should return 6

//currying function
sum(1)(2)(3)
//should return 6

- If you notice in the currying function for each function call sum(1) we are returning a function which accept next argument sum(1)(2) and it again returns a function which accepts argument sum(1)(2)(3) and so on.
- There is no specified limit it to it how many times you return a function, also there are different variations to currying like the first function will accept the 2 arguments and the next function can accept any number of arguments and so.
//variations of currying
sum(1)(2)(3)
sum(1, 2)(3)
sum(1)(2, 3)
sum(1, 2, 3)

//all of them should return same output
//6

- //variations of currying
sum(1)(2)(3)
sum(1, 2)(3)
sum(1)(2, 3)
sum(1, 2, 3)

//all of them should return same output

- Now you may be wondering each function call returns a new function then how the value is returned from it. Well for that we have to decide a base condition in which should return the output like if no argument is passed in the next function call then return the value or if we have reached 5 arguments then return the value, etc.
sum(1)(2)(3)()
sum(1, 2)(3)()
sum(1)(2, 3)()
sum(1, 2, 3)()

//all of these should return 6

//OR

//when we reach 5 arguments then return the value rather than new function
sum(1, 2, 3, 4, 5)
sum(1, 2)(3, 4, 5)
sum(1)(2, 3, 4, 5)
sum(1, 2, 3)(4, 5)
sum(1)(2)(3)(4)(5)
sum(1, 2, 3, 4)(5)

//all should return 15

- I was recently asked this question in interview to implement the same currying function for 4 arguments. When we have reached the limit return the value. Note:- Maximum 4 arguments will only be passed.
sum(1, 2, 3, 4)
sum(1)(2)(3)(4)
sum(1, 2)(3, 4)
sum(1, 2, 3)(4)
sum(1)(2, 3, 4)

//all should return 10

sum(1, 2, 3, 4)
sum(1)(2)(3)(4)
sum(1, 2)(3, 4)
sum(1, 2, 3)(4)
sum(1)(2, 3, 4)

- lets start implementing this.
- First, lets handle the base case.
- When the function is invoked in normal style sum(1, 2, 3, 4). In this all we have to do is check the number of arguments passed, if it is same as the limit provided return the sum of them.
*/

function sum() {
    // Spread the arguements in storage array
    const storage = [...arguments];
    if(storage?.length === 4) {
        return storage.reduce((acc, curr) => acc + curr, 0);
    };
};

console.log(sum(1, 2, 3, 4));

/*
- ...args is the rest operator which aggregates all the passed arguments as an array.
- Once we have the array of arguments we have stored that in a variable inside the function storage = [...args].
- The purpose of using is variable is that, when the arguments passed is less than the limit then we will use this further to store next  argument in the closure. Now if the length of the storage is 4 which means we have 4 arguments so return their sum. 
- Otherwise we have to return a new function every time until we have reached the limit.
*/

const sum = (...args) => {
    const storage = [...arguments];
    if(storage?.length === 4) {
        return storage.reduce((acc, curr) => acc + curr, 0);
    } else {
        const temp = function(...args2) {
            storage.push(...args2)
        }
    }
}
/*
- Write a Javascript function that returns sum of the previous values.
- We will see how to create a Javascript function that will remember its previously passed values and return the sum of the current and  previous value.
- Here is an example of what the output should be like.

sum(5); // 5
sum(3); // 8
sum(4); // 12
sum(0); // 12

- As the 5 is the first value so the first function returned 5. As 3 is passed as the input to the second function the output is 5 + 3 = 8.
- To create such functions we should know how the javascript function works. Javascript functions have access to the state (properties & methods) of its parent function even after it is executed.
- So to create a function that will return the sum of the previous values in javascript we will use this technique of closure.
*/

const curry = () => {
  // To Store Previous Value
  let sum = 0;
  //  Return an Inner function which will have access to it's parent function's store.
  return function (num = 0) {
    sum += num;
    return sum;
  }
};

/*
- Here we have created a function named curry which has a store to keep track of the previous value and returns an inner function. 
- The powerful feature of the Javascript function is that the inner function still has access to the parent function’s properties and  methods even after it is returned.
- We now call this function which will return the inner function and we can use the return inner function for our action.
*/

/*
Returns and store the Inner function.
*/
let sum = curry();

/*
Now if we call this with the specified value, it should return the desired output.console.log(sum(5)); //5
*/
console.log(sum(5));
console.log(sum(3));
console.log(sum(4));
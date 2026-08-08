/*
Given an object which can have a function as a value at a nested level, create a function that will accept arguments as input and pass it through all the functions in the input object and return the computed value.

Example
Input:
{
  a : {
    b : (a,b,c) => a+b+c,
    c : (a,b,c) => a+b-c,
  },
  d : (a,b,c) => a-b-c
}

const output = pipe(obj)(1,1,1);
console.log(output);

Output:
{
  a : {
    b : 3,
    c : 1
  },
  d: -1
}
*/

let testCase1 = {
    a: {
        b: (a, b, c) => a + b + c,
        c: (a, b, c) => a + b - c,
    },
    d: (a, b, c) => a - b - c
};

function piping(obj) {
    return function(...args) {
        for(let key in obj) {
            let val = obj[key];
            if(typeof val === "function") {
                obj[key] = val(...args);
            } else if (typeof val === "object"){
                obj[key] = piping(val)(...args);
            }
        }
        return obj;
    };
};

const output = piping(testCase1)(1, 1, 1);
console.log("Output", output);
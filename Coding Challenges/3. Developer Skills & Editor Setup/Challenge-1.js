/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."


Your tasks:
1. Create a function 'printForcast' which takes in an array 'arr' and logs a string like above to the console. Try it with both the data set.
2. Use the problem-solving framework, Understand the problem and break it up into sub-problems.


Test data:
Data 1: [17, 21, 23]
Data2:[12,5,-5,0,4]
*/

// Solution -
const temperatures = [17, 21, 23];

let str = "";

for(let i = 0; i < temperatures.length; i++){
    str += `${temperatures[i]}C in ${i+1} days ... `
}

console.log(str);
/*
Create a function pipe that accepts multiple functions as an argument and a value and run this value through each function and return the final output.

Input:
const val = { salary: 10000 };

const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const result = pipe(
  getSalary,
  addBonus,
  deductTax 
)(val);

Output:
7700
*/

function piping(...fns) {
    return function(val) {
        for(let fn of fns) {
            val = fn(val);
        };
        return val;
    }
};

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const val = { salary: 10000 };

const result = piping(
    getSalary,
    addBonus,
    deductTax
)(val);

console.log(result);
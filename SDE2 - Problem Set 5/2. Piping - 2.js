/*
Create a function pipe that accepts multiple functions as an argument and a value and run this value through each function and return the final output.

Input:
Example 1:
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

Example 2:
Input:
const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const result = pipe(
  getSalary,
  addBonus,
  deductTax
)({ salary: 10000 });

console.log(result);

Output:
7700
*/

const pipe = function (...fns) {
  return function (val) {
    for (let f of fns) {
      val = f(val);
    }
    return val;
  };
};

const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const result = pipe(
  getSalary,
  addBonus,
  deductTax 
)({ salary: 10000 });
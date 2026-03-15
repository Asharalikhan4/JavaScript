/*
- Think of Rest as "gathering", It collects multiple independent elements into a single array or object. it is always used on the left side of an assignment ( destructuring) or in function paramters.

1. Replace the legacy arguements object(which isn't real array.)
function sum(...numbers){
  return numbers.reduce((acc, curr) => acc + curr);
}

2. Capturing the remaining properties.
const [first, ...others] = [1, 2, 3, 4];
// first = 1, others = [2, 3, 4];

const {role, ...bio} = {name: "John", age: 30, role: "admin"};
// role = "Admin", bio = {name = "John", age: 30 }
*/

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a,b,others);


const user = {
    name: "John Doe",
    age: 30,
    address: "123 Main Street",
    phone: "123-456-7890",
  };
  
  const { name, age, ...otherInfo } = user;
  console.log(name)
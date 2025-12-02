function print(text) {
  console.log(text);
}

// For Loop
print("\nFor Loop");
for (let i = 0; i < 11; i++) {
  print(i);
}

// while Loop
print("\nWhile Loop");
let j = 10;
while (j > 1) {
  print(j);
  j--;
}

// dowhile Loop
print("\ndowhile Loop");
let k = 10;
do {
  print(k);
  k--;
} while (k > 0);

/*
For...in Loop
The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:
for (variable in object)
  statement
*/

const name = {
  firstName: "Ashar",
  middleName: "Ali",
  lastName: "Khan",
};

for (i in name) {
  console.log(i);
}

/*
For...of Loop
The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
for (variable of iterable)
  statement
*/

for (i of name){
  console.log(i)
}

/*

| Feature                     | `for...in`                | `for...of`                   |
| --------------------------- | ------------------------- | ---------------------------- |
| Iterates over               | **keys** (property names) | **values** of iterables      |
| Works with objects?         | ✔ Yes                     | ❌ No (unless converted)      |
| Works with arrays?          | ✔ Yes (keys = indexes)    | ✔ Yes (values)               |
| Best for                    | Objects                   | Arrays, strings, maps, sets  |
| Iteration order guaranteed? | ❌ No                      | ✔ Yes (for arrays/iterables) |


*/
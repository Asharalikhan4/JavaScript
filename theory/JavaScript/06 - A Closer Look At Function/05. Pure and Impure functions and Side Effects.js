/*
Pure Function
- A pure function is a function that:
- Always returns the same output for the same input
- Does not cause side effects (does not change anything outside itself)

function add(a, b) {
  return a + b;
}

- add(2, 3) will always return 5
- It does not change any variable, file, API, DOM, etc.

*/


/*
- An impure function is a function that:
- Depends on external state, OR
- Modifies something outside the function (side effects)
- Example (Impure – depends on external variable)

let tax = 10;

function calculatePrice(price) {
  return price + tax;
}


- If tax changes, the same input gives a different output → impure.
*/


/*
- A side effect is anything a function does besides returning a value.

- In other words:
If a function changes something outside itself or depends on something outside itself → it has a side effect.

| Side Effect                               | Example                        |
| ----------------------------------------- | ------------------------------ |
| Modifying a variable outside the function | `count++`                      |
| Changing React state                      | `setCount(5)`                  |
| API calls                                 | `fetch("/users")`              |
| Writing to file / localStorage            | `localStorage.setItem("x", 1)` |
| Logging                                   | `console.log()`                |
| DOM updates                               | `document.title = "Hello"`     |
| Timers                                    | `setTimeout()`                 |
| Random values                             | `Math.random()`                |
| Current time                              | `Date.now()`                   |
*/
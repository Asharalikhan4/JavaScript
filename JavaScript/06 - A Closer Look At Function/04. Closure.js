/*
# Closure
- Closure is a bundling of two or more functions where inner functions have access to the properties and methods of the outer functions even after the execution of the external function is done. Preferance will always will be given to the nearest one declared.

# Example of Closure
1. The module pattern (Data Privacy)
2. Function Factories (Currying)
3. Event Listeners and Callback
4. React hooks (useState)
5. Redux State Management
5. Node.js Middleware
6. Memoization

- to debug closures we use The scope tab in chrome devtools.
*/

function example() {
  let car = "mustang";
  function displayCar() {
    console.log(car);
  }
  displayCar();
}

example();
//OUTPUT -  mustang


/*
this is because variables are lexical scope in js and they can be accessed anywhere inside the scope unless and until they are overridden. In the above example, the variable is function scoped and it can be accessed anywhere within the function body(even in the inner functions). 
*/

function example() {
  // outer scoped
  let blog = "blog text";
  function displayBlog() {
    // new variable with the same name declared in a new scope, this will be printed.
    let blog = "hello";
    console.log(blog);
  };
  displayBlog();
};

example();

/*
Preferance is always given to the nearest declared one.
*/

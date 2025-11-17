/*
 Closure is a bundling of two or more functions where inner functions have access to the properties and methods of the outer functions even after the execution of the external function is done. Preferance will always will be given to the nearest one declared.
*/

function example() {
  let car = "mustang";
  function displayCar() {
    console.log(car);
  }
  displayCar();
}

example();
// mustang
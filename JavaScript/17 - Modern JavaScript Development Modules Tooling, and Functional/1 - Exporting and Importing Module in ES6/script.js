import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

import add, { cart } from "./shoppingCart.js"; // Import default export

// gimport * as ShoppingCart from "./shoppingCart.js";  // Import everything from the module

addToCart("Bread", 5);

add("Pizza", 2);
add("Bread", 5);
add("Apples", 4);

console.log(cart);

console.log("Script file")

console.log(price, tq);
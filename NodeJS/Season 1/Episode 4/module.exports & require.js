// require("./module1.js");
// const obj = require("./sum.js");
// const { calculateSum, x } = require("./sum.js");
import { calculateProduct } from "./calculate/productES.js";
// const data = require("./data.json");
import data from "./data.json";

console.log("Hello from module.exports & require.js");

let a = 10, b = 10;
// obj.calculateSum(a, b);
// console.log(x);
// calculateSum(a, b);
// console.log(calculateSum);
calculateProduct(a, b);
// console.log(data);
/* 
Top Level Await is a feature introduced in ECMAScript 2022 (ES2022) that allows you to use the await keyword at the top level of your JavaScript module. Prior to this feature, the await keyword could only be used inside an async function.

With Top Level Await, you can now use await directly in the top-level scope of your module, outside of any function. This means that you can use await to pause the execution of your module and wait for a promise to resolve before continuing.

This feature is particularly useful in scenarios where you want to perform asynchronous operations at the top level of your module, such as fetching data from an API or reading from a file. Previously, you would have needed to wrap your code in an async function to use await, but now you can use it directly.

Here's an example to illustrate how Top Level Await works:

;
In the above example, we import a function fetchData from a separate module called api.js. With Top Level Await, we can directly use await to pause the execution of the module until the fetchData promise resolves. Once the promise resolves, the result is assigned to the data variable, and we can then log it to the console.

It's important to note that in order to use Top Level Await, you need to specify the "top-level-await" flag in your module's configuration. This flag indicates that your module supports Top Level Await and allows you to use the await keyword at the top level.

Overall, Top Level Await simplifies the usage of asynchronous operations in JavaScript modules by allowing you to use await directly at the top level, without the need for an async function wrapper.
*/


// this might seems interesting but sometime it block the execution of the code.
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();


// Returning of data from a async function
const getLastPost = async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return { title: data.at(-1).title, body: data.at(-1).body };
}

const lastPost = await getLastPost();   // we can also use the .then() method to get the data. but this the latest way.
console.log(lastPost);

// if one module imports the module which have the top level await then the importing will have to wait for the imported module to finish the blocking code.
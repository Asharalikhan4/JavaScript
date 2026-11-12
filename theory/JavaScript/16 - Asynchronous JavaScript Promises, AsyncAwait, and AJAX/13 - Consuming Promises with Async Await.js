/*
- The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.
You can also define async functions using the async function expression.
*/

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  // To get the json out of the data
  const data = await res.json();
  console.log(data);
};

whereAmI("portugal");

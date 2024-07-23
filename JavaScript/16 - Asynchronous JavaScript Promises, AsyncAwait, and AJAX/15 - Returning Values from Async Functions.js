"use strict";

const whereAmI = async function (country) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if(!res.ok){
            throw new Error("Country not found");
        }
        const data = await res.json();
        return `You're in ${data[0]?.name?.common}`;
    } catch (error) {
        console.log(error);
        throw err;  // Reject the promise returned from the async function
    }
}

console.log("1: Will get location");

// Code below down will return a promise
// const city = whereAmI("portugal");
// console.log(city)

// Code below down will work cause we're using then method to resolve the promise.
// whereAmI("portugal")
// .then(city => {
//     console.log(city);
// })
// .catch(err => {
//     console.error(`${err.message}`);
// })

// Writing the code in async await way
// Await can be only be used inside an async function so we can't do that atleast for now, cause if we want to use that we have to make a function that is async and do all the thing in that async function. if you remember there's concept of IIFE in which we can make a function and call it immediately. So we can do that here.

// after using this function eveything will occur in a synchronous way.
(async function(){
    try{
        const city = await whereAmI("portugal");
        console.log(city);
    } catch(error) {
        console.error(error);
    }
})();

console.log("2: Finished getting location");
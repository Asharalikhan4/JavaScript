"use strict";

// Basic syntax for try catch
// try{
//     // Piece of code that might have an error
// } catch(error) {
//     console.error(error);
// }


const whereAmI = async function (country) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if(!res.ok){
            throw new Error("Country not found");
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        // if there is an error, it will be caught here
        console.log(error);
    }
}

whereAmI("portugal");
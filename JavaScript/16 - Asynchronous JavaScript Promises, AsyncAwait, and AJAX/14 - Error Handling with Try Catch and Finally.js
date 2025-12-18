"use strict";

/*
Basic syntax for try catch
try{
    // Piece of code that might have an error
} catch(error) {
    console.error(error);
}

*/

const whereAmI = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) {
      throw new Error("Country not found");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    // if there is an error, it will be caught here
    console.log(error);
  } finally {
    console.log("I'll run everytimr.")
  }
};

whereAmI("portugal");

/*
-> Code below down will throw an error cause try must be followed by catch or finally
try {
  throw new Error("This is error")
}
*/

// Use of Throw Keyword
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}

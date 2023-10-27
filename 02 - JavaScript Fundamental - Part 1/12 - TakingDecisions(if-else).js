const age = 22;
const isOldEnough = 18;

if(age >= isOldEnough){
    console.log("You can drive");
} else {
    console.log("Sorry, you're not eligible to drive.")
}

// In this if the given condition is true then first block will execute else second block will be execued if present.

// You can also use the ternary operator for one line.
age >= isOldEnough ? console.log("You can Drive") : console.log("Sorry, you're not eligible to drive.")

// both will generate the same output.
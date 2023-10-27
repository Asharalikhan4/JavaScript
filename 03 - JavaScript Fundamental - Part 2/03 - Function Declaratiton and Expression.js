// Function Declaration
function printName1(){
    const name = "Ashar";
    console.log(name);
}

printName1();

// Function Expression
const printName2 = function(){
    const name = "Ashar";
    return name;
}

console.log(printName2());
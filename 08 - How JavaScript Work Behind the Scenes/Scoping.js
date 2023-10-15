"use strict";

const constName = "Ashar";
let letName = "Ali";
var varName = "Khan";

if(true){
    var varName2 = "Hamza";
    let letName2 = "Ali";
    const constName2 = "Khan";
}

function names(){
    var varName3 = "Hammaz";
    let letName3 = "Ali";
    const constName3 = "Khan";
}

// Global Scope
console.log(constName);
console.log(letName);
console.log(varName);

// Block Scope
console.log(varName2);
console.log(letName2);
console.log(constName2);

// function Scope
console.log(varName3);
console.log(letName3);
console.log(constName3);
// Break -> it will break the functionality of array

console.log("Break's Loop");
for(let i = 0; i < 5; i++){
    // this loop will break at 3 and will not print anything from 3.
    if(i === 3){
        break;
    }
    console.log(i);
}

// Continue -> It will pass that iteration, if the continue is applied.
console.log("Continue's Loop");
for(let i = 0; i < 5; i++){
    // this loop will print everything except 3
    if(i === 3){
        continue;
    }
    console.log(i);
}
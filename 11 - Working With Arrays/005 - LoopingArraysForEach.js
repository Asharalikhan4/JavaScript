const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)      
for(const [i, movement] of movements.entries()){        //to access the counter variable in the array.
    if(movement > 0){
        console.log(`Movement ${i + 1 } You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1} You withdraw ${Math.abs(movement)}`);
    }
}

console.log("Using for Each")

movements.forEach(function(movement, i) {
    if(movement > 0){
        console.log(`Movement ${i + 1} You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1} You withdraw ${Math.abs(movement)}`);
    }
});


// break statement don't work in the forEach loop.
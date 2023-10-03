// Function Expression
function percentageOfWorld1(population){
    return `${((population/7900)*100).toFixed(2)}%`;
}

// Function Declaration
const percentageOfWorld2 = (population) => {
    return `${((population/7900)*100).toFixed(2)}%`;
}

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld2(1441));
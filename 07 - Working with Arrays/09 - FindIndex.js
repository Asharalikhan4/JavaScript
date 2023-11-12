const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300];

const indexValue = movements.findIndex(element => element < 2);

console.log(indexValue);
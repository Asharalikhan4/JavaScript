const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300];

const first = movements.find(mov => mov < 0);
console.log(first);
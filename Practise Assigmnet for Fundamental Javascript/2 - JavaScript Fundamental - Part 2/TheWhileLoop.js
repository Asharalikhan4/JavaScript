const populations = [10, 1441, 332, 83];

const percentageOfWorld = (population) => {
    return ((population / 7900) * 100).toFixed(2);
}

const percentage2 = [];
let i = 0;
while(i < populations.length){
    percentage2.push(percentageOfWorld(populations[i]));
    i++;
}

console.log(percentage2);
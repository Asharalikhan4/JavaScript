const populations = [10, 1441, 332, 83];

const percentageOfWorld = (population) => {
    return ((population / 7900) * 100).toFixed(2);
}

const percentage2 = [];
for(let i = 0; i < populations.length; i++){
    percentage2.push(percentageOfWorld(populations[i]));
}

console.log(percentage2);
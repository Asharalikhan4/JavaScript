const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);

function percentageCalc(population){
    return `${((population/7900)*100).toFixed(2)}%`;
}
const percentages = [
    percentageCalc(populations[0]),
    percentageCalc(populations[1]),
    percentageCalc(populations[2]),
    percentageCalc(populations[3]),
];

console.log(percentages);
// missing number in an array

function missingNum(num){
    let sum = 0, len = num.length;
    let arrayTotalSum = len*(len+1)/2;
    for(let i = 0; i < len; i++){
        sum += num[i];
    }
    return len-sum;
}

console.log(missingNum([1,2,4]))
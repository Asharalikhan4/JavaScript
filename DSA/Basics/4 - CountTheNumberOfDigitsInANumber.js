function countNoOfDigit(num){
    let count = 0;
    num = Math.abs(num);    // To check it is a number.
    while(num > 0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}

console.log(countNoOfDigit(123));
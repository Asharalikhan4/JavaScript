// Sum of digits of a number 123 -> 1+2+3 = 6

function sumOfDigits(num){
    let answer = 0;
    while(num > 0){
        answer += num%10;
        num = Math.floor(num/10);   // We're doing Math.floor cause we only need the floor value.
    }
    return answer;
};

console.log(sumOfDigits(123));

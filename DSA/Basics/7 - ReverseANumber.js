function isPallindrome(num){
    num = Math.abs(num);
    let copyNum = num;
    let ans = 0;
    while(num > 0){
        let temp = num % 10;
        ans = ans*10+temp;
        num = Math.floor(num/10);
    }
    return ans === copyNum;
}

console.log(isPallindrome(12222221));
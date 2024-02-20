const arr = [1, 4, 3];
let n = 4;

function missingNumber(arr, n) {
    let num = (n*(n+1))/2;
    let sum = 0;
    for(let i = 0; i < n - 1; i++){
        sum += arr[i];
    }
    return num - sum;
}

console.log("Missing numebr is : ", missingNumber(arr, n));
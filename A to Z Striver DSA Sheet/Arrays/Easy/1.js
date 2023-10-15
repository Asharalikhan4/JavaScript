// Given an array A[] of size n. The task is to find the largest element in it.

const arr = [1,2,3,4,5,6,7,8];

function largestNumber(arr){
    let answer = arr[0];
    for(let num of arr){
        if(num > answer){
            answer = num;
        }
    }
    return answer;
}

const answer = largestNumber(arr);
console.log(answer);
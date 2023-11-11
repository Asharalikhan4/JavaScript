// https://practice.geeksforgeeks.org/problems/second-largest3735/1


const arr = [1,2,3,4,5,6,7,8];

let largest = 0, secondLargest = -1;

function secondLargestNumber(arr){
    for(let num of arr){
        if(num > largest){
            secondLargest = largest;
            largest = num;
        } else if(num < largest && num > secondLargest){
            secondLargest = num;
        }
    }
    return secondLargest;
}

const answer = secondLargestNumber(arr);
console.log(answer);
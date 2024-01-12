// https://practice.geeksforgeeks.org/problems/second-largest3735/1


const arr = [1,2,3,4,5,6,7,8];

function secondLargestNumber(arr){
    let largestNumber = -1, secondLargestNumber = -1, n= arr.length;
        for(let i = 0; i < n; i++){
            if(arr[i] > largestNumber){
                secondLargestNumber = largestNumber;
                largestNumber = arr[i];
            } else if(arr[i] > secondLargestNumber && arr[i] !== largestNumber){
                secondLargestNumber = arr[i];
            }
        }
    return secondLargestNumber;
}

const answer = secondLargestNumber(arr);
console.log(answer);
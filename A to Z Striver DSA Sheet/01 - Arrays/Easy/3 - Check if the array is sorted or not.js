// https://practice.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=check-if-an-array-is-sorted


const arr = [1,2,3,4,5,6,7];

function isSorted(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
};

if(isSorted(arr)){
    console.log("Array is sorted");
} else {
    console.log("Array is not sorted");
}
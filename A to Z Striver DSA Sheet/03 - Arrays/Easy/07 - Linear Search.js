const arr = [1,2,3,4,5,6,7,8,9];

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return true;
        }
    }
    return false;
}

linearSearch(arr, 5) ? console.log("Element is present") : console.log("Element is not present")
// Link -> https://leetcode.com/problems/sort-colors/

const arr = [2, 0, 2, 1, 1, 0];

// Brute
function sortArrayBrute(arr) {
    return arr.sort();
}

// Better
function sortArrayBetter(arr) {
    let start = 0, mid = 0, end = arr.length - 1;
    while (mid <= end) {
        if(arr[mid] == 0){
            let temp = arr[mid];
            arr[mid] = arr[start];
            arr[start] = temp;
            mid++;
            start++;
        } else if(arr[mid] == 1){
            mid++;
        } else {
            let temp = arr[mid];
            arr[mid] = arr[end];
            arr[end] = temp;
            end--;
        }
    }
    return arr;
}

console.log("Answer (Brute) :", sortArrayBrute(arr));
console.log("Answer (Better) :", sortArrayBetter(arr));
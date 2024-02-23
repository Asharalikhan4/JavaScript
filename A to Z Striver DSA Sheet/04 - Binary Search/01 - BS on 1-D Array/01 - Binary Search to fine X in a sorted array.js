//  Link -> https://www.geeksforgeeks.org/problems/binary-search-1587115620/1

const arr = [1, 2, 3, 4, 5];
const target = 4;

// Iterative approach
function binarySearchIterative(arr, target) {
    let low = 0, high = arr.length - 1, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (target > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

// Recursive approach
function binarySearchRecursive(arr, low, high, target) {
    if (low > high) return false;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target){
        return true;
    } else if (target > arr[mid]){
        return binarySearchRecursive(arr, mid + 1, high, target);
    } else {
        return binarySearchRecursive(arr, low, mid - 1, target);
    }
}

console.log("Answer (Iterative) :", binarySearchIterative(arr, target));
console.log("Answer (Recursive) :", binarySearchRecursive(arr, 0, arr.length-1, target));
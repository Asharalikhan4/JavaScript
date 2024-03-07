// Link -> https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1?track=DSASP-Searching&amp%253BbatchId=154

const arr = [1, 2, 8, 10, 11, 12, 19];
const target = 0;

// Brute
function floorExistBrute(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= target) {
            return i;
        }
    }
    return -1;
}

// Optimal
function floorExistOptimal(arr, target) {
}


// console.log("Answer (Brute) :", floorExistBrute(arr, target));
console.log("Answer (Optimal) :", floorExistOptimal(arr, target));
const arr = [1, 2, 3, 4, 5, 6, 7];

function isSorted(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};

if (isSorted(arr)) {
    console.log("Array is sorted");
} else {
    console.log("Array is not sorted");
}
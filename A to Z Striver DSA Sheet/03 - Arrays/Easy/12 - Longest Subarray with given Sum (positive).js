const arr = [10, 5, 2, 7, 1, 9];
const k = 15;

// Brute Force Approach
function subArrayLengthBrute(arr, k) {
    let n = arr.length;
    let len = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let s = 0;
            for (let K = i; K <= j; K++) {
                s += arr[K];
            }

            if (s === k)
                len = Math.max(len, j - i + 1);
        }
    }
    return len;
}


// Better
function subArrayLengthBetter(arr, k) {
    let n = arr.length;
    let len = 0;
    for (let i = 0; i < n; i++) {
        let s = 0;
        for (let j = i; j < n; j++) {
            s += arr[j];
            if (s == k) {
                len = Math.max(len, j-i+1);
            }
        }
    }
    return len;
}

console.log("Maximum length of a subarray with the given sum (Brute force approach) :", subArrayLengthBrute(arr, k));
console.log("Maximum length of a subarray with the given sum (Better approach) :", subArrayLengthBetter(arr, k));
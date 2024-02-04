// Subsequence is like subsets of array, but the order of the elements should be maintained.
// this problem can also be solved using pows set method.

function printSubSequence(index, ans, arr, n) {
    if(index === n){
        for(let val in ans){
            console.log(val);
        }
        console.log();
        return;
    }
    // Take or pick the particular index into the subsequence
    ans.push(arr[index]);
    printSubSequence(index+1, ans, arr, n);
    ans.pop();

    // not pick, or not take condition, this element is not added to your subsequence.
    printSubSequence(index+1, ans, arr, n);
}

function main(){
    let arr = [3, 1, 2];
    let ans = [];
    let n = arr.length;
    printSubSequence(0, ans, arr, n);
}

main();
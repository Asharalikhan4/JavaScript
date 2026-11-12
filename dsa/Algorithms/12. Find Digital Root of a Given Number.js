/*
Problem Statement: Write an algorithm to find the digital root of a given number. Digital root is the sum of the all the digits of the number till there is only digit left.
Input:
5674
493193

Output:
4 // 5 + 6 + 7 + 4 = 22 = 2 + 2 = 4
2 // 4 + 9 + 3 + 1 + 9 + 3 = 29 = 2 + 9 = 11 = 1 + 1 = 2

Related Links
- https://www.linkedin.com/posts/prakharchauhan281098_opentowork-frontenddevelopment-javascript-share-7281324741347430400-6sx1/?utm_source=share&utm_medium=member_desktop
*/

let digitalRootUsingRecursion = (n) => {
    /*
        T.C - O(N*2)
        S.C - O(N)
    */
    let sum = 0;
    while (parseInt(n) > 0) {
        let temp = n % 10;
        sum = sum + temp;
        n = parseInt(n / 10);
    };
    if (sum < 10) {
        return sum;
    };
    return digitalRootUsingRecursion(sum);
};

console.log("digitalRootUsingRecursion :", digitalRootUsingRecursion(257520643));
console.log("digitalRootUsingRecursion :", digitalRootUsingRecursion(5674));
console.log("digitalRootUsingRecursion :", digitalRootUsingRecursion(493193));
console.log("digitalRootUsingRecursion :", digitalRootUsingRecursion(34758));


let digitalRootUsingFormula = (n) => {
    /*
        T.C - O(1)
        S.C - O(1)
    */
    return (n - 1) % 9 + 1;
};

console.log("digitalRootUsingFormula:", digitalRootUsingFormula(257520643));
console.log("digitalRootUsingFormula:", digitalRootUsingFormula(5674));
console.log("digitalRootUsingFormula:", digitalRootUsingFormula(493193));
console.log("digitalRootUsingFormula:", digitalRootUsingFormula(34758));
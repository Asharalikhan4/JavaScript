function printToN(n){
    if(n == 0){
        return;
    }
    printToN(n - 1);
    console.log(n);
}

printToN(5);
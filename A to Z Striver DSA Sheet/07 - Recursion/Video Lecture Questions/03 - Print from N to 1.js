function printToOne(n){
    if(n == 0){
        return;
    }
    console.log(n);
    printToOne(n-1);
}

printToOne(5);
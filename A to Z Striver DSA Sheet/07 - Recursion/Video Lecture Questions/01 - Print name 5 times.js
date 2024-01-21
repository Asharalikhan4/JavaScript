function printName(name, times){
    if(times === 0) return;
    console.log(name);
    printName(name, times - 1);
}

printName("Ashar Ali Khan", 5);
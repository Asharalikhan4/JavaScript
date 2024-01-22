console.log("Test Start");  // this is top level code so this will be executed first

setTimeout(() => {
    // this will be executed at last even though it is set to 0 sec cause it will wait in callback queue.
    console.log("0 sec timer");
}, 0);

Promise.resolve("Resolved promise 1")
.then(res => console.log(res));     // this will be executed after the top level code cause it is in microtask queue, and microtask queue has higher priority than callback queue

Promise.resolve("Resolved promise 2")
.then(res => {
    for(let i = 0; i < 1000; i++){
        console.log(res);
    }
})

console.log("Test End");    // this will be executed first cause it is top level code
/*
Web Api's ( these are part of browser ) -> these are browser super power and broswer give access to all these in execution context or js engine to use all these super power. we get all these in execution becuse of global object called window 
- setTimeount()
- DOM Api's
- fetch()
- localStorage
- console
- location
*/


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


/*
console.log("Start");

setTimeount(function cb() {
console.log("Callback");
}, 5000);

console.log("End");


-> Let's break down how this code will get executed.

whenever you try to execute a code and global execution context is cretaed and pushed it into to call stack. here the whole code will run line by line

so first it will use console web api and console the data. this api is clubbed through window into your js code.

now we have setTimout it will go and call the api and this gives the timer feature of browser.
setTimout take a callback function and some delay, so let's register a callback cb and it also has a timer so it will also start the timer and the js code will move to the next line


in the next line there's console so it will do the same thing as we did in the first step

so once code is done executing the global execution context will pop out of the stack.

meanwhile all this happening the timer is still running, and as soon as time end, like 5 sec passed then callback function need to be executed, but as we saw the global execution finished whole code and popped out of call stack, so somehow we need this callback function back in the call stack to execute this

Now the Event Loop and Callback Queue come into the picture.

the callback function needs to go in the call stack to get executed but it can't go directly so go through callback queue, first it go in callback queue when the timer expire, and the job of the event loop is to keep checking callback queue that is there is something and if it has something then it will push it to the call stack and call stack execute it.

// Output
Start
End
Callback
*/







/*
Let's take one more exaple

console.log("Start");

document.getElementsById("btn").addEventListener("click", function cb(){
  console.log("Callback");
});

console.log("End");

 
// Output
Start
End
Callback
*/

/*
Now we'll discuss why do we need callback queue
let's take the above example suppose user click the button 5-6 times then all the function will get pushed in the callback queue and then event loop do it's work it slowly popus the event and slowly slwoly push it to the call stack
*/



/*
Let take one more example

console.log("Start");

setTimout(function cbT(){
console.log("CB SetTimout");
}, 5000);

fetch("https://api.netflix.com")
.then(function cbF() {
console.log("CB Netflix");
});

console.log("End");

Now the same story a global execution context is pushed in the call stack and code started executing line by line.

// Output
Start
End
CB Netflix

now here we have two async task first one is timer which will be executed after the 5 sec and the second thing is response from the api, now which one get executed get decided by the microtask queue it is same as the callback queue but it has higher priority, so whatever function get inside the microtask queue get executed first and whatever the function get inside the callback queue will get executed later, now what come inside the callback queue, the promises will go the priority queue, and the job of the event loop is same it keep on checking if the call stack is empty or not, now after the code is finished the global execution context gets pop out of the call stack and even loop see call stack is empty and there are some pending task to be executed in the microtask queue and callback queue, now the microtask queue has the higher priority so it give api task to be executed first and do the task and after the call stack again get empty then callback queue task will be picked up and function get executed.


as we know now microtask queue are given priority then what function can comes inside - all callback function which are coming through promises will go in the microtask queue, and there is something known as mutation observer it keep checking if there is some mutation in DOM tree or not if there is some mutation in DOM tree it can execute callback function and all the other thing go in the callback queue


// Read about Promises Mutation Observer


now the callback queue is also know as task queue.

now suppose a task in the microtask queue create one more task and that task gets into the microtask queue and this loop goes on and on, then the task in the callback queue will never get the time to get executed and hence this thing is called function starvation of task in callback queue.
*/



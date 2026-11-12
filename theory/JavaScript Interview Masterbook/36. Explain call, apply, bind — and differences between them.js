/*
- In JavaScript, functions are special objects that can be called in many different ways. By default,
when you call a regular function, the value of `this` inside it depends on _how_ you call it — not
where it was written. Sometimes you need to control what `this` points to, or you might need to pass
arguments flexibly from another source. That's where **call**, **apply**, and **bind** come in.
These three methods belong to every function in JavaScript, and they let you explicitly decide what
`this` should refer to when the function runs.

- The **call** method runs a function immediately, but allows you to specify what `this` should be
and pass arguments one by one. For example, `sayHello.call(user, "Hi")` calls `sayHello` right away
with `this` bound to `user`. It's just like calling `user.sayHello("Hi")`, but gives you manual control
over the context. The **apply** method works almost the same way — it also invokes the function
immediately — but instead of taking arguments individually, it expects them as a single array (or
array-like structure). For instance, `sayHello.apply(user, ["Hi"])` does the same as `sayHello.call(user,
"Hi")`. The main difference is only in how you pass the arguments. This was particularly useful before
the spread operator (`...`) was introduced, since you could easily forward arrays of arguments to a
function.

- The **bind** method is slightly different. It doesn't call the function right away. Instead, it creates
and returns a _new function_ that remembers the `this` value you provided and optionally some of
the arguments you passed. When you later call that returned function, it will automatically use the
bound `this` and pre-filled arguments. For example, if you write `const greetJohn = greet.bind(user,
"John")`, you now have a new function that always greets using that same `user` context and name,
no matter how or where you call it. This is extremely useful when you need to pass functions as
callbacks — like event listeners or setTimeout handlers — and want them to remember which object
they belong to.

- Here's a simple to visulaize it:
*/

function sayGreeting(greeting) {
    console.log(greeting + ", I am " + this.name);
};

const person = {
    name: "Alice"
};

/*
call - run immediately, arguments comma seperated
*/

sayGreeting.call(person, "Ashar");

/*
apply - run immediately, arguments in array format
*/
sayGreeting.apply(person, ["Ashar"]);

/*
bind - return a function, arguments in array format
*/
const bindGreeting = sayGreeting.bind(person, ["Ashar"]);
bindGreeting();

/*
- Another common use case is **borrowing methods**. For example, `Array.prototype.slice.call(arguments)` converts the special `arguments` object (which is array-like but not a real array) into a true array. You can do this because call allows you to use a method from one object (Array.prototype) on another object (`arguments`) by setting what `this` should be. Similarly, you can use `Math.max.apply(null, numbers)` to find the maximum value in an array, since `Math.max` expects individual numbers, not an array.

- It's also worth noting how **arrow functions** differ here. Arrow functions do not have their own
`this` — they inherit it from the surrounding scope where they were defined. Because of that, using call, apply, or bind on arrow functions has no effect on `this`; they simply ignore those changes. That's one of the main differences between arrow functions and regular ones when it comes to controlling context.

- Finally, there's a special rule when combining **bind** and **new**. If you create a bound function and later use it as a constructor (with the `new` keyword), the newly created object becomes `this`, overriding the bound value. This ensures that bound functions still behave correctly when used to create objects. So, binding only fixes `this` for normal function calls, not for object construction.

- In short:
    - **call** -> runs the function immediately, takes `this` and individual arguments.
    - **apply** -> runs immediately, takes `this` and arguments as an array.
    - **bind** -> returns a new function that remembers its `this` and optional pre-filled arguments for later

- These tools make JavaScript more flexible by letting you borrow functions, stabilize the meaning of `this`, and reuse logic in different contexts without rewriting it.

- Example:
*/
function showPrefix(prefix) {
    return prefix + this.name;
};

const user = {
    name: "Ava"
};

showPrefix.call(user, ">> "); // ">> Ava"
showPrefix.apply(user, ["** "]); // "** Ava"
const bindShowPrefix = showPrefix.bind(user, ":: ");
bindShowPrefix(); // ":: Ava"

function firstArg() {
    return arguments[0];
};
Array.prototype.slice.call(arguments); // turn arguments into a real array

/*
Partial Application with bind
*/
function add(a, b, c) {
    return a + b + c;
};

const add5 = add.bind(null, 5);
add5(10, 20); // 35

/*
- Common Misconceptions
1. bind mutates the original function. It returns a new function; the original remains unchanged.
2. You can rebind an arrow's this with call/apply/bind. Arrow functions' this is fixed lexically.
3. bind prevents new from changing this. Constructing a bound function with new binds this to the newly created instance.

Problem 1 ->  Coding: Write a logger that prints this.tag; demonstrate changing receivers with call/apply and
permanently with bind.
*/

function logger() {
    console.log(this.tag);
};

const userModule = { tag: "USER_SERVICE" };
const authModule = { tag: "AUTH_SERVICE" };
const dbModule = { tag: "DATABASE_SERVICE" };

logger.call(userModule);
logger.apply(authModule)
const dbLogger = logger.bind(dbModule);
dbLogger();
dbLogger.call(userModule);


/*
1. Theory: In one paragraph, contrast call, apply, and bind and describe when each is most
convenient.
2. Coding: Write a logger that prints this.tag; demonstrate changing receivers with call/apply and
permanently with bind.
3. Coding: Create a multiply(a, b) function and a double(x) by partially applying multiply with bind.
*/
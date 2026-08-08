/*
- Callback hell is the tangled control flow that emerges when you nest many asynchronous callbacks inside one another. Each step depends on the previous step's result, so you place the next callback inside the prior one's success handler, creating a pyramid shape. This structure makes code hard to read, error paths easy to forget, and sequencing brittle (e.g., double invocations or missed errors). The problem is not callbacks themselves; it's unstructured composition that interleaves business logic with control flow and error handling.

- The escape is to use composable abstractions. Promises represent future values and let you chain steps with then and catch in a flat structure; errors propagate by default, so you don't have to thread error callbacks manually. async/await builds on promises and lets you write sequential async steps top-to-bottom with try/catch for errors while still returning promises. Additional techniques include extracting named functions instead of inline anonymous ones, using Promise.all to run independent tasks in parallel, wrapping callback-style APIs with Promise constructors (promisify), and centralizing error handling so you have one place to log and recover.

- Example: From nested callbacks to promise chaining
*/

fetch(url1)
    .then((r1) => r1.json())
    .then((d1) => fetch(url2 + d1.id))
    .then((r2) => r2.json())
    .then((d2) => console.log(d2))
    .catch((err) => console.error(err));

/*
Same flow using async/await
*/

async function run() {
    try {
        const r1 = await fetch(url1);
        const d1 = await r1.json();
        const r2 = await fetch(url2 + d1.id);
        const d2 = await r2.json();
        console.log(d2);
    } catch (error) {
        console.error("Error:", error);
    };
};

/*
Promisify a callback API
*/

function delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
};

/*
- Common misconceptions
    1. async/await eliminates promises. It is syntax on top of promises; they remain fundamental.
    2. Promises are always sequential. Promise.all, allSettled, and any provide parallel coordination.
    3. Callbacks are obsolete. They are still used in many APIs; promisify or wrap them for composition.
*/

/*
- Practice questions
1. Theory: Describe three concrete problems with deeply nested callbacks and how promises
mitigate each.
2. Coding: Convert a "pyramid" of setTimeout calls into a promise chain with a delay(ms) helper.
3. Coding: Rewrite a two-step dependent async flow using async/await with proper try/catch and a
finally clean-up.
*/
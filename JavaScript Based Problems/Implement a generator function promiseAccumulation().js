/*
Implement a generator function promiseAccumulation() that receives an arbitrary number of promises, then:
- If the promise is resolved, it yields the returned value.
- If the promise is rejected, it yields -1 and stops yielding values.
*/

async function* promiseAccumulation(promiseArr) {
    for (const promise of promiseArr) {
        try {
            const result = await promise;
            yield result;
        } catch (error) {
            yield -1;
            return;
        }
    };
};

async function testIt() {
    const gen = promiseAccumulation([
        Promise.resolve(10),
        Promise.reject(),
        Promise.resolve(20)
    ]);

    console.log((await gen.next()));
    console.log((await gen.next()));
    console.log((await gen.next()));
    console.log((await gen.next()));
}

testIt();
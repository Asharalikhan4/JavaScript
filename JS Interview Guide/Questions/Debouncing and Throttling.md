## What is the difference between the debouncing and throttling?

**Debouncing**
- It is used to invoke/call/execute functions only when things have stopped happening for a given specific time. For example, Call a search function to fetch the result when the user has stopped typing in the search box. if the user keeps on typing then reset the function.

**Throttling**
- It is used to restrict the no of time a function can be called/invoked/executes. For example, making an api call to the server on the user's click. if the user spam's the click then also there will be specific calls only. Like, make each call after 10 seconds.
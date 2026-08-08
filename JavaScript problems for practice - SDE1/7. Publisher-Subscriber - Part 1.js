/*
This question was asked in Uber's screen interview and Livespace SDE2 interview.

Create a simple Observable class that implements the observer pattern. The class should:

- Allow subscribing to data changes via a subscribe method
- Notify all subscribers when data changes via a notify method
- Allow unsubscribing from updates
- Maintain a list of subscriber callbacks

const observable = new Observable();

// Subscribe to changes
const subscription = observable.subscribe(data => {
  console.log('Received:', data);
});

// Notify subscribers
observable.notify('Hello!'); // logs: "Received: Hello!"

// Unsubscribe
subscription.unsubscribe();

// No longer logs anything
observable.notify('Hello again!');
*/
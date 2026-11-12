/*
This question was asked in Uber's frontend interview and Birdeye's SSE frontend interview.

Create a simple Observable class that implements the observer pattern. The class should:
- Allow subscribing to data changes via a subscribe method
- Notify all subscribers when data changes via a fire method
- Allow unsubscribing from updates
- Maintain a list of subscriber callbacks

const observable = new Observable();
// Subscribe to changes
const subscription = observable.subscribe(data => {
  console.log('Received:', data);
});
// Notify subscribers
observable.fire('Hello!'); // logs: "Received: Hello!"
// Unsubscribe
subscription.unsubscribe();
// No longer logs anything
observable.fire('Hello again!');
*/

class Observable {
  constructor() {
    this.handlers = [];
  }

  subscribe(fn) {
    this.handlers.push(fn);

    return {
      unsubscribe: () => {
        this.handlers = this.handlers.filter((item) => item !== fn);
      },
    };
  };
  
  fire(o, thisObj) {
    const scope = thisObj || globalThis;
    this.handlers.forEach((item) => {
      item.call(scope, o);
    });
  }
}

const observable = new Observable();
const subscription = observable.subscribe((data) => {
  console.log("Received:", data);
});
observable.fire("Hello!"); // logs: "Received: Hello!"
subscription.unsubscribe();
observable.fire("Hello again!");

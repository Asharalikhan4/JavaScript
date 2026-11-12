/*
This is an advanced version of problem based on the publisher-subscriber pattern, this question was asked to me in the Coursera's frontend interview.

Problem statement
Implement the pub-sub pattern in JavaScript that has following methods: subscribe, subscribeOnce, and subscribeOnceAsync.

•subscribe(name, callback): Will take the name of the event and assign a callback to it. This callback will be invoked when the event is published. It returns a remove() method to unsubscribe the event.
•subscribeOnce(name, callback): Will take the name of the event and assign a callback to it. This event will be published only once.
•subscribeOnceAsync(name): Will take the name of the event and returns a promise that is settled or fullfilled when the event is published.
•publish(name, data): Publish a single event and pass the data to the callback of each events. If the event is subscribed only once, it should not invoke twice.
•publishAll(name): Publishes all events and passes the data to the callback of each events. If the event is subscribed only once, it should not invoke twice.
*/

class PublisherSubscriber {
    constructor() {
        this.subscriptionList = new Map();
        this.subscribeOnceList = new Map();
        this.subscribeOnceAsyncList = new Map();
    };

    subscribe(name, callback) {
        if (!this.subscriptionList.has(name)) {
            this.subscriptionList.set(name, [callback]);
        } else {
            const existingCallbacks = this.subscriptionList.get(name);
            this.subscriptionList.set(name, [...existingCallbacks, callback]);
        };

        return {
            remove: () => {
                const existingCallbacks = this.subscriptionList.get(name);
                const filtered = existingCallbacks.filter((e) => e !== callback);
                this.subscriptionList.set(name, filtered);
            }
        };
    };

    subscribeOnce(name, callback) {
        if (!this.subscribeOnceList.has(name)) {
            this.subscribeOnceList.set(name, [callback]);
        } else {
            const existingCallbacks = this.subscribeOnceList.get(name);
            this.subscribeOnceList.set(name, [...existingCallbacks, callback]);
        };
    };

    subscribeOnceAsync(name) {
        return new Promise((resolve, reject) => {
            if(!this.subscribeOnceAsyncList.has(name)) {
                this.subscribeOnceAsyncList.set(name, [resolve]);
            } else {
                const existingCallbacks = this.subscribeOnceAsyncList.get(name);
                this.subscribeOnceAsyncList.set(name, [...existingCallbacks, resolve]);
            }
        });
    };

    publish(name, data) {
        const callbacks = this.subscriptionList.get(name) || [];
        callbacks.forEach((e) => {
            e(data);
        });

        const subscribeOnceCallbacks = this.subscribeOnceList.get(name) || [];
        subscribeOnceCallbacks.forEach((e) => {
            e(data);
        });
        this.subscribeOnceList.set(name, []);

        const subscribeOnceAsyncCallback = this.subscribeOnceAsyncList.get(name) || [];
        subscribeOnceAsyncCallback.forEach((e) => {
            e(data);
        });
        this.subscribeOnceAsyncList.set(name, []);
    };

    publishAll(data) {
        const entries = this.subscriptionList.entries();
        for(let [key, value] of entries) {
            value.forEach((e) => {
                e(data);
            });
        }
    };
};


const events = new PublisherSubscriber();
const newUserNewsSubscription = events.subscribe("new-user", function (payload) {
  console.log(`Sending Q1 News to: ${payload}`);
});
events.publish("new-user", "Jhon");
const newUserNewsSubscription2 = events.subscribe("new-user", function (payload) {
  console.log(`Sending Q2 News to: ${payload}`);
});
events.publish("new-user", "Doe");
newUserNewsSubscription.remove();
events.publish("new-user", "Foo");
events.publishAll("FooBar");
events.subscribeOnce("new-user", function (payload) {
  console.log(`I am invoked once ${payload}`);
});
events.publish("new-user", "Foo Once");
events.publish("new-user", "Foo Twice");
events.subscribeOnceAsync("new-user").then(function (payload) {
  console.log(`I am invoked once ${payload}`);
});
events.publish("new-user", "Foo Once Async");
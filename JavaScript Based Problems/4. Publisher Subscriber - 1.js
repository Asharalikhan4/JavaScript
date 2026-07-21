/*
Observer design pattern in JavaScript, Also known as pub/sub pattern short for publication/subscription. It is clear from the name itself that if you are subscribed to the publication and if something is published in the publication it will notify the subscriber.

A subscription model in which an object subscribes to a host and the host notifies the object whenever an event occurs is known as the observer pattern. It is one of the important pillars of event-driven programming and JavaScript is one of the most popular event-driven programming languages. This pattern promotes loose coupling facilitating good object-oriented design.

JavaScript is the most avid user follower observer pattern and we use it almost regularly while building web apps. We write event handlers by creating event listeners that listen to an event and notify them every time the event is fired with some additional details of the event.

For example, when a click event is triggered you can access the event object to get all the event details about the click like its position on the screen, etc.

You can also remove the listener (unsubscribe) to stop listening if you want.

Implementation
To create the observer design pattern, we need to have two types of participants.

1.Hosts

1.It will maintain the list of observers.
2.Provides option to subscribe and unsubscribe to the observers.
3.Notifies the observer when state changes.
2.Observer

4.Has a function that gets called/invoked every time a state changes.
Keeping these two things in mind, we can create the Observer design pattern in JavaScript.
*/

class PublisherSubscriber {
    constructor() {
        this.subscribers = [];
    };

    subscribe(fn) {
        this.subscribers.push(fn);
    };

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter((item) => item !== fn);
    };

    fire(o, thisObj) {
        const scope = thisObj || globalThis;
        this.subscribers.forEach((item) => {
            item.call(scope, o);
        });
    };
};

const publisherSubscriber = new PublisherSubscriber();
// 1st observer
const moveHandler = function (item) {
    console.log("fired: " + item);
};

// 2nd observer
const moveHandler2 = function (item) {
    console.log("Moved: " + item);
};

publisherSubscriber.subscribe(moveHandler);
publisherSubscriber.fire("event #1")
publisherSubscriber.unsubscribe(moveHandler);
publisherSubscriber.fire('event #2');
publisherSubscriber.subscribe(moveHandler);
publisherSubscriber.subscribe(moveHandler2);
publisherSubscriber.fire("event #3");
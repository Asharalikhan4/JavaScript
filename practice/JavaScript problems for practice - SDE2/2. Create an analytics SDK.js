/*
This is a Swiggy frontend interview question.

Implement an analytics SDK that exposes log events, it takes in events and queues them, and then starts sending the events. The SDK should adhere the following properties.

Send each event after a delay of 1 second and this logging fails every n % 5 times.
Send the next event only after the previous one resolves.
When the failure occurs attempt a retry.

Input:
const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");

sdk.send();

Output:
"Analytics sent event 1"
"Analytics sent event 2"
"Analytics sent event 3"
"Analytics sent event 4"
"-----------------------"
"Failed to send event 5"
"Retrying sending event 5"
"-----------------------"
"Analytics sent event 5"
"Analytics sent event 6"
"Analytics sent event 7"
"Analytics sent event 8"
"-----------------------"
"Failed to send event 9"
"Retrying sending event 9"
"-----------------------"
"Analytics sent event 9"
"Analytics sent event 10"

Related Link - https://leetcode.com/discuss/post/1857338/swiggy-phone-design-analytics-sdk-sde2-b-ustr/
*/

function customPromise(fn) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn);
    }, 1000);
  });
}

class SDK {
  constructor() {
    this.events = [];
    this.count = 1;
  };

  logEvent(event) {
    this.events.push(event);
  };

  wait() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.count % 5 === 0) {
          reject();
        } else {
          resolve();
        }
      }, 1000);
    });
  }

  async send() {
    while (this.events.length > 0) {
      let currentEvent = this.events.shift();
      try {
        await this.wait();
        console.log(`Analytics send ${currentEvent}`);
        this.count++;
      } catch (error) {
        console.log("-----------------------");
        console.log("Failed to send " + currentEvent);
        console.log("Retrying sending " + currentEvent);
        console.log("-----------------------");

        this.count = 1;
        this.events.unshift(currentEvent);
      }
    }
  }
}

const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");

sdk.send();

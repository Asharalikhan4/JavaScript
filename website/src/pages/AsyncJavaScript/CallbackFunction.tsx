import SubHeading from "@/components/SubHeading";
import { FC } from "react";

const CallbackFunction: FC = () => {
    return (
        <div id="callbackfunction">
            <SubHeading name="Callback Function" />
            <div>
                <p>- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.</p>
                <p>- There are two ways in which the callback may be called: synchronous and asynchronous. Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks, while asynchronous callbacks are called at some point later, after an asynchronous operation has completed.</p>
                <p>- Examples of synchronous callbacks include the callbacks passed to Array.prototype.map(), Array.prototype.forEach(), etc. Examples of asynchronous callbacks include the callbacks passed to setTimeout() and Promise.prototype.then().</p>
            </div>
        </div>
    );
};

export default CallbackFunction;
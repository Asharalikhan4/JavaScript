import CodeDisplay from "@/components/CodeDisplay";
import SubHeading from "@/components/SubHeading";
import { FC } from "react";

const ConsumingPromises: FC = () => {
    return (
        <div id="consumingPromises">
            <SubHeading name="Consuming Promises" />
            <CodeDisplay language="typescript" code={`const getData = function(input){
    fetch("url", {
        methods
    })
    .then((response) => response.json())    // response.json() also return a promise.
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
};`} />
        <div>
            <p>Promises don&apos;t resolve the callback problem but it helps in eliminating callback hell problem from our code.</p>
        </div>
        </div>
    );
};

export default ConsumingPromises;
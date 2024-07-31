import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const ConsumingPromises: FC = () => {
    return (
        <CustomComponent id="consumingPromises">
            <Heading level={3} text="Consuming Promises" />
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
        </CustomComponent>
    );
};

export default ConsumingPromises;
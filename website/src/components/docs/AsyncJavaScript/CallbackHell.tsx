import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const CallbackHell = () => {
    return (
        <CustomComponent id="callback-hell">
            <Heading level={3} text="Callback Hell" />
            <div>
                <p>- When we try to execute more then one async task in a sequence then <CustomText>Callback Hell</CustomText> occur.</p>
                <p>- It makes your code hard to maintain and read.</p>
                <p>- It is also known as <CustomText>Pyramid of Doom</CustomText>.</p>
                <p>- To avoid callback hell we can use <CustomText>Promises</CustomText> or <CustomText>Async/Await</CustomText>.</p>
            </div>
            <CodeDisplay language="typescript" code={`setTimeout(() => {
    console.log("Task 1");
    setTimout(() => {
        console.log("Task 2");
        setTimeout(() => {
            console.log("Task 3");
        }, 1000);
    }, 1000);
}, 1000);`} />
        </CustomComponent>
    );
};

export default CallbackHell;
import { FC } from "react";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";
import CustomText from "@/components/CustomText";
import CodeDisplay from "@/components/CodeDisplay";

const HandlingRejectedPromises: FC = () => {
    return (
        <CustomComponent id="handling-rejected-promises">
            <Heading level={3} text="Handling Rejected Promises" />
            <p>- There are two ways to handle rejected promises.</p>
            <p>1. By Passing a callback function into <CustomText>.then()</CustomText> method.</p>
            <CodeDisplay language="javascript" code={`.then((response) => response.json();
    err => alert(err)
).then`} />
            <p>2. By Using <CustomText>.catch()</CustomText> method. It handle all the errors at the end of the chain.</p>
            <CodeDisplay language="javascript" code={`.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.error(error))`} />
            <p>- If you want some piece of code to be executed in any condition use <CustomText>.finally()</CustomText> method at last.</p>
            <CodeDisplay language="javascript" code={`.finally(() => {
    console.log("Finally");
});`} />
        <Heading level={5} text="Throwing Errors Manually" />
        <CodeDisplay language="javascript" code={`fetch("url", { methods })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        };
        return response.json();
    }
})`} />
        </CustomComponent>
    );
};

export default HandlingRejectedPromises;
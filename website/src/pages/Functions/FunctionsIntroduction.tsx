import { FC } from "react";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";
import CodeDisplay from "@/components/CodeDisplay";

const FunctionIntroduction: FC = () => {
    return (
        <CustomComponent id="function-introduction">
            <Heading level={3} text="Function Introduction" />
            <p>- A function is a block of code designed to perform a particular task.</p>
            <p>- A function is executed when "something" invokes it (call's it).</p>
            <Heading level={5} text="Function Syntax" />
            <CodeDisplay language="javascript" code={`function name(parameter1, parameter2, ...){
    // Code to be executed
}`} />
            <Heading level={5} text="Real Example" />
            <CodeDisplay language="javascript" code={`function greeting(you){
return Hello`} />
        </CustomComponent>
    );
};

export default FunctionIntroduction;
import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const TernaryOperator: FC = () => {
    return (
        <div className="space-y-2">
            <Heading level={3} text="Ternary Operator" />
            <p>- It is a short form of if else statement</p>
            <p>- if the condition is true then the first block after the condition will be executed and if the condition is false then the last block will be executed.</p>
            <CodeDisplay language="javascript" code={`age = 10 ? console.log("Age is 10") : console.log("Age is not 10")`} />
        </div>
    );
};

export default TernaryOperator;
import CodeDisplay from "@/components/CodeDisplay";
import CustomComponent from "@/components/CustomComponent";
import CustomText from "@/components/CustomText";
import Heading from "@/components/Heading";
import { FC } from "react";

const ArrowFunction: FC = () => {
    return (
        <CustomComponent id="arrow-function">
            <Heading level={3} text="Arrow Function (ES6)" />
            <CodeDisplay language="javascript" code={`const name = (parameter1, parameter2...) => {
    // Code Here
}`} />
            <p>- We invoke <CustomText>Arrow function</CustomText> normally as we invoke other.</p>
            <p>- <CustomText>Arrow function</CustomText> do not get <CustomText>this keyword</CustomText>.</p>
        </CustomComponent>
    );
};

export default ArrowFunction;
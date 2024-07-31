import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

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
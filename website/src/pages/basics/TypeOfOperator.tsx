import { FC } from "react";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";
import CustomText from "@/components/CustomText";
import CodeDisplay from "@/components/CodeDisplay";

const TypeOfOperator: FC = () => {
    return (
        <CustomComponent id="typeof-operator">
            <Heading level={3} text="typeof Operator" />
            <p><CustomText>typeof</CustomText> is a operator which tell the type of variable.</p>
            <CodeDisplay language="javascript" code={`let car = "Mustang";
console.log(typeof car) or console.log(typeof(car));

//OUTPUT
string`} />
        </CustomComponent>
    );
};

export default TypeOfOperator;
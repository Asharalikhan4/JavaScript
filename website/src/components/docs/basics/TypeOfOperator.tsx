import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const TypeOfOperator: FC = () => {
    return (
        <CustomComponent id="typeof-operator">
            <Heading level={3} text="1.5 - typeof Operator" />
            <p><CustomText>typeof</CustomText> is a operator which tell the type of variable.</p>
            <CodeDisplay language="javascript" code={`let car = "Mustang";
console.log(typeof car) or console.log(typeof(car));

//OUTPUT
string`} />
        </CustomComponent>
    );
};

export default TypeOfOperator;
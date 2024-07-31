import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const FunctionDeclaration: FC = () => {
    return (
        <CustomComponent id="function-declaration">
            <Heading level={3} text="Function Declaration" />
            <CodeDisplay language="javascript" code={`function calcAge1(birthYear){
    return 2037-birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);
`} />
        </CustomComponent>
    );
};

export default FunctionDeclaration;
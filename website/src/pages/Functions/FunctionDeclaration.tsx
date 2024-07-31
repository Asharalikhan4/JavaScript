import { FC } from "react";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";
import CodeDisplay from "@/components/CodeDisplay";

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
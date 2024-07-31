import { FC } from "react";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";
import CodeDisplay from "@/components/CodeDisplay";

const FunctionExpression: FC = () => {
    return (
        <CustomComponent id="function-expression">
            <Heading level={3} text="Function Expression" />
            <CodeDisplay language="javascript" code={`const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);`} />
        </CustomComponent>
    );
};

export default FunctionExpression;
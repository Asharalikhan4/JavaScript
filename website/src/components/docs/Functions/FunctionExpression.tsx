import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

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
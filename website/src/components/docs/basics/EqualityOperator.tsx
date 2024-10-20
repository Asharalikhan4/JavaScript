import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const EqualityOperator: FC = () => {
    return (
        <CustomComponent id="equality-operator">
            <Heading level={3} text="1.13 - Equality Operator (== Vs ===)" />
            <p>In JavaScript, == and === are two different comparison operators used to compare values, but they have distinct behaviors:</p>
            <Heading level={5} text="1.13.1 - Equality Operator (==)" />
            <p>- The == operator checks for equality between values but performs type coercion, which means it can convert the operands to the same type before making the comparison.</p>
            <p>- If the types of the operands are different, JavaScript will attempt to convert one or both of them to a common type.</p>
            <p>- For example, 2 == '2' would return true because JavaScript coerces the string to a number for the comparison.</p>
            <CodeDisplay language="javascript" code={`console.log(2 == "2");`} />
            <Heading level={5} text="1.13.2 - Strict Equality Operator (===)" />
            <p>- The === operator checks for strict equality between values without performing type coercion. It compares both the value and the data type of the operands.</p>
            <p>- If the types of the operands are different, === returns false without attempting to convert them to a common type.</p>
            <p>- For example, 2 === '2' would return false because the types are different.</p>
            <CodeDisplay language="javascript" code={`console.log(2 === "2");`} />
            <Heading level={5} text="Here's a summary of the differences:" />
            <p>- == performs type coercion and checks if the values are equal after possible type conversion.</p>
            <p>- === checks for strict equality, meaning it compares both the values and their data types without type coercion.</p>
            <p>- It is generally recommended to use === (strict equality) in JavaScript because it avoids unexpected type coercion, leading to more predictable and less error-prone code. However, there may be specific cases where == is intentionally used, but it's important to be aware of how it performs type conversion and its potential side effects.</p>
        </CustomComponent>
    );
};

export default EqualityOperator;
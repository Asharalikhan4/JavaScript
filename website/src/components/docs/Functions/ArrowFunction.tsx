import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const ArrowFunction: FC = () => {
    return (
        <CustomComponent id="arrow-function">
            <Heading level={3} text="2.5 - Arrow Function (ES6)" />
            <p>- Arrow functions were introduced in ECMAScript 6 (ES6) and provide a more concise syntax for writing functions. They are often used for short, anonymous functions and have unique behavior, particularly when it comes to the this keyword.</p>
            <p>- We invoke <CustomText>Arrow function</CustomText> normally as we invoke other.</p>
            <p>- One of the most important features of arrow functions is how they handle the this keyword. In regular functions, this is dynamically bound to the object that calls the function. In arrow functions, this inherits the value of this from the surrounding context (lexical scoping).</p>
            <p>- Arrow functions also do not have their own super keyword. They inherit super from their enclosing context. This is important when using arrow functions within classes that extend another class.</p>
            <CodeDisplay language="javascript" code={`const name = (parameter1, parameter2...) => {
    // Code Here
}`} />
        </CustomComponent>
    );
};

export default ArrowFunction;
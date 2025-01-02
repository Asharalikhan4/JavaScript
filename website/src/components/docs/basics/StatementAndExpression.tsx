import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const StatementAndExpression: FC = () => {
    return (
        <CustomComponent id="statement-and-expression">
            <Heading level={3} text="1.15 - Statement and Expression" />
            <p>- In JavaScript, expressions and statements are fundamental components of the language, each serving a distinct purpose:</p>
            <Heading level={4} text="1.15.1 - Statement" />
            <p>- A statement is a line of code that performs an action. Statements are used to control the flow and behavior of a program. They don't produce a value in the same way that expressions do.</p>
            <p>- Statements can include variable declarations, loops, conditionals, function declarations, and more.</p>
            <p>- Examples of statements:</p>
            <p>1. Variable declaration: var x = 5;</p>
            <p>2. Conditional statement: if (condition)</p>
            <p>3. Loop statement: for (var i = 0; i &lt; 10; i++)</p>
            <p>4. Function declaration: function myFunction()</p>
            <Heading level={4} text="1.15.2 - Expression" />
            <p>- An expression is a piece of code that produces a value. It can be a single value, a combination of values, or a function call.</p>
            <p>- Expressions are typically used within statements. They can be as simple as a single variable or literal value, or they can be more complex, involving operators and function calls.</p>
            <p>- Examples of expressions:</p>
            <p>1. 5 (a literal number)</p>
            <p>2.  x + y (the result of an addition operation)</p>
            <p>3. functionCall() (the result of calling a function)</p>
        </CustomComponent>
    );
};

export default StatementAndExpression;
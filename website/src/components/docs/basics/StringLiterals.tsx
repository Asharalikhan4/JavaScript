import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";

const StringLiterals: FC = () => {
    return (
        <CustomComponent id="string-literals">
            <Heading level={3} text="1.8 - String and Template Literals" />
            <Heading level={4} text="1.8.1 - String" />
            <p>- A string is a data type used to represent text. It is a sequence of characters enclosed in quotes. Strings can be created using:</p>
            <ul className="list-disc list-inside space-y-1">
                <li>Double quotes (")</li>
                <li>Single quotes (')</li>
                <li>Template literals (backticks, `)</li>
            </ul>
            <p>- Strings are immutable, meaning their content cannot be changed after creation (although variables holding strings can be reassigned).</p>
            <CodeDisplay language="javascript" code={`let greeting = "Hello, World!"; // Double quotes
let name = 'Ashar';            // Single quotes
let message = "Welcome!"";      // Template literal (introduced in ES6)

console.log(greeting); // Output: Hello, World!
console.log(name);     // Output: Ashar
console.log(message);  // Output: Welcome!`} />
            <Heading level={4} text="1.8.2 - String Literals" />
            <p>- A string literal is the actual representation of a string value in code. It refers to the exact text enclosed in quotes. String literals are used to create string values directly.</p>
            <p>- Enclosed in single ('), double (") quotes, or backticks (` for template literals in some languages like JavaScript).</p>
            <CodeDisplay language="javascript" code={`// String literals in JavaScript
let message = "Welcome to the exam!"; // Double-quoted literal
let subject = 'Programming Concepts'; // Single-quoted literal
let templateLiteral = "Hello, {name}!"; // Template literal (allows embedded expressions)
console.log(message);          // Output: Welcome to the exam!
console.log(subject);          // Output: Programming Concepts
console.log(templateLiteral);  // Output: Hello, Ashar!`
            }/>
        </CustomComponent>
    );
};

export default StringLiterals;
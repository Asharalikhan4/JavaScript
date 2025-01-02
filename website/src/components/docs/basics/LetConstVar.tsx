import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const LetConstVar: FC = () => {
    return (
        <CustomComponent id="let-const-var">
            <Heading level={3} text="1.6 - Let, Const, and Var" />
            <p>- Let, const, and var are used to declare variables in JavaScript.</p>
            <Heading level={5} text="1.6.1 - Let" />
            <CodeDisplay language="typescript" code={`let greeting: string = 'Hello, world!';`} />
            <p>- Block-scoped: Variables declared with let are block-scoped, which means they are only available within the block (e.g., an if statement or a loop) where they are defined.</p>
            <p>- Hoisting: Variables declared with let are hoisted, but they are not initialized until they are declared. This avoids some of the issues associated with var hoisting.</p>
            <p>- Reassignable: You can reassign values to a variable declared with let, but you can't redeclare it in the same scope.</p>
            <Heading level={5} text="1.6.2 - Const" />
            <CodeDisplay language="typescript" code={`const PI: number = 3.14;`} />
            <p>- Block-scoped: Variables declared with const are also block-scoped.</p>
            <p>- Hoisting: Like let, variables declared with const are hoisted but not initialized until they are declared.</p>
            <p>- Immutable: Variables declared with const cannot be reassigned. However, for objects and arrays declared with const, their properties or elements can still be modified.</p>
            <Heading level={5} text="1.6.3 - Var" />
            <CodeDisplay language="typescript" code={`var count: number = 0;`} />
            <p>- Function-scoped: Variables declared with var are function-scoped, which means they are only available within the function where they are defined.</p>
            <p>- Hoisting: Variables declared with var are hoisted, which means they are moved to the top of their containing function or global scope during the compilation phase. This can sometimes lead to unexpected behavior.</p>
            <p>- Reassignable: You can reassign values to a variable declared with var multiple times.</p>
        </CustomComponent>
    );
};

export default LetConstVar;
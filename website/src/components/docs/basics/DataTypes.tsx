import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const DataTypes: FC = () => {
    return (
        <CustomComponent id="data-types">
            <Heading level={3} text="1.3 - Data Types" />
            <p>- There are 8 primitive data types in JavaScript.</p>
            <ul className="list-decimal list-inside space-y-1">
                <li>
                    Number
                    <CodeDisplay language="typescript" code={`const number = 10;`} />
                </li>
                <li>
                    String
                    <CodeDisplay language="typescript" code={`const greeting = 'Hello, world!';`} />
                </li>
                <li>
                    Boolean
                    <CodeDisplay language="typescript" code={`const isTrue = true;`} />
                </li>
                <li>
                    Null
                    <CodeDisplay language="typescript" code={`const nothing = null;`} />
                </li>
                <li>
                    Undefined
                    <CodeDisplay language="typescript" code={`const notDefined = undefined;`} />
                </li>
                <li>
                    Symbol
                    <CodeDisplay language="typescript" code={`const unique = Symbol('unique');`} />
                </li>
                <li>
                    BigInt
                    <CodeDisplay language="typescript" code={`const bigNumber = 100n;`} />
                </li>
            </ul>
            <p>- JavaScript has <CustomText>dynamic typing</CustomText> means we don't have to manually define the data types of the value stored in a variable, data types are determined automatically.</p>
        </CustomComponent>
    );
};

export default DataTypes;
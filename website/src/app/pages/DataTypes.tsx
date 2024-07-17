import { FC } from "react";
import Heading from "../components/Heading";
import CodeDisplay from "../components/CodeDisplay";

const DataTypes: FC = () => {
    return (
        <div className="space-y-2">
            <Heading name="Data Types" />
            <p>There are 8 basic data types in JavaScript.</p>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    Number
                    <CodeDisplay language="typescript" code={`const number: number = 10;`} />
                </li>
                <li>
                    String
                    <CodeDisplay language="typescript" code={`const greeting: string = 'Hello, world!';`} />
                </li>
                <li>
                    Boolean
                    <CodeDisplay language="typescript" code={`const isTrue: boolean = true;`} />
                </li>
                <li>
                    Null
                    <CodeDisplay language="typescript" code={`const nothing: null = null;`} />
                </li>
                <li>
                    Undefined
                    <CodeDisplay language="typescript" code={`const notDefined: undefined = undefined;`} />
                </li>
                <li>
                    Object
                    <CodeDisplay language="typescript" code={`const person: object = { name: 'John Doe', age: 25 };`} />
                </li>
                <li>
                    Symbol
                    <CodeDisplay language="typescript" code={`const unique: symbol = Symbol('unique');`} />
                </li>
                <li>
                    BigInt
                    <CodeDisplay language="typescript" code={`const bigNumber: bigint = 100n;`} />
                </li>
            </ul>
        </div>
    );
};

export default DataTypes;
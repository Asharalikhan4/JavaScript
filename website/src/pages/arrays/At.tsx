import CodeDisplay from "@/components/CodeDisplay";
import SubHeading from "@/components/SubHeading";
import { FC } from "react";

const At: FC = () => {
    return (
        <div id="at">
            <SubHeading name="at()" />
            <p></p>
            <CodeDisplay language="typescript" code={`let fruits = ["Apple", "Orange", "Plum"];
// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum`} />
        </div>
    );
};

export default At;
import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const At: FC = () => {
    return (
        <CustomComponent id="at">
            <Heading level={4} text="3.2.1 - at" />
            <p></p>
            <CodeDisplay language="typescript" code={`let fruits = ["Apple", "Orange", "Plum"];
// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum`} />
        </CustomComponent>
    );
};

export default At;
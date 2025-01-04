import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";

const Find: FC = () => {
    return (
        <CustomComponent id="find">
            <Heading level={4} text="3.2.3 - find" />
            <p>- Returns the value of the first element of the calling array for which the provided function condition returns true.</p>
            <CodeDisplay language="typescript" code={`const arr = [1, 2, 3, 4, 5];
const result = arr.find((num) => num > 2);
console.log(result);    // Output: 3`} />
        </CustomComponent>
    );
};

export default Find;
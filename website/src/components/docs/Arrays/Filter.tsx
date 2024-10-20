import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";

const Filter: FC = () => {
    return (
        <CustomComponent id="filter">
            <Heading level={4} text="3.2.2 - Filter" />
            <p>- Returns a new array containing all elements of the calling array for which the provided function condition returns true.</p>
            <CodeDisplay language="typescript" code={`let arr = [1, 2, 3, 4, 5, 6, 7];
arr = arr.filter((num) => num > 2);  // condition is to take number only greater than 2.
console.log(arr);  // Output: [3, 4, 5, 6, 7]
`} />
        </CustomComponent>
    );
};

export default Filter;
import CodeDisplay from "@/components/CodeDisplay";
import SubHeading from "@/components/SubHeading";
import { FC } from "react";

const Filter: FC = () => {
    return (
        <div id="filter">
            <SubHeading name="Filter" />
            <div>
                <p>Returns a new array containing all elements of the calling array for which the provided function condition returns true.</p>
            </div>
            <CodeDisplay language="typescript" code={`let arr = [1, 2, 3, 4, 5, 6, 7];
arr = arr.filter((num) => num > 2);  // condition is to take number only greater than 2.
console.log(arr);  // Output: [3, 4, 5, 6, 7]
`} />
        </div>
    );
};

export default Filter;
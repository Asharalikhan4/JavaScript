import CodeDisplay from "@/components/CodeDisplay";
import SubHeading from "@/components/SubHeading";
import { FC } from "react";

const Map: FC = () => {
    return (
        <div id="map">
            <SubHeading name="Map" />
            <div>
                <p>Returns a new array containing the results of invoking a function on every element in the calling array.</p>
            </div>
            <CodeDisplay language="javascript" code={`let arr = [1, 2, 3, 4, 5, 6, 7];
arr = arr.map((num) => num * 2);  // Changes to be applied on each element.
console.log(arr);  // Output: [2, 4, 6, 8, 10, 12, 14]`}
            /> 
        </div>
    );
};

export default Map;
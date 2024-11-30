import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";

const Map: FC = () => {
    return (
        <CustomComponent id="map">
            <Heading level={4} text="3.2.4 - map" />
            <p>- Returns a new array containing the results of invoking a function on every element in the calling array.</p>
            <CodeDisplay language="javascript" code={`let arr = [1, 2, 3, 4, 5, 6, 7];
arr = arr.map((num) => num * 2);  // Changes to be applied on each element.
console.log(arr);  // Output: [2, 4, 6, 8, 10, 12, 14]`}
            />
        </CustomComponent>
    );
};

export default Map;
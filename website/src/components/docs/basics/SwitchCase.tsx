import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const SwitchCase: FC = () => {
    return (
        <CustomComponent id="switch-case">
            <Heading level={3} text="1.14 - Switch Case" />
            <CodeDisplay language="typescript" code={`const day = "monday";

switch(day){
    case "sunday":
        console.log("Today is Sunday");
        break;
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is tuesday");
        break;
    case "wednesday":
        console.log("Today is wednesday");
        break;
    default:
        console.log("There's some issues with the input");
}

// OUTPUT
Today is Monday`} />
        </CustomComponent>
    );
};

export default SwitchCase;
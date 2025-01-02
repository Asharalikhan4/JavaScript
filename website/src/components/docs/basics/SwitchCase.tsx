import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const SwitchCase: FC = () => {
    return (
        <CustomComponent id="switch-case">
            <Heading level={3} text="1.14 - Switch Case" />
            <p>- The <CustomText>switch</CustomText> statement in JavaScript is a control structure used to execute one block of code among multiple options, based on the value of an expression. It provides a cleaner and more efficient alternative to multiple if...else if statements when checking a single value against many cases.</p>
            <CodeDisplay language="typescript" code={`switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if no case matches
}
    

// Example
const day = "monday";

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
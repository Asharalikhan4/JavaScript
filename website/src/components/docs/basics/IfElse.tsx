import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const IfElse: FC = () => {
    return (
        <CustomComponent id="if-else">
            <Heading level={3} text="If Else" />
            <CodeDisplay language="javascript" code={`const age = 22;
const isOldEnough = 18;

if(age >= isOldEnough){
    console.log("You can drive");
} else {
    console.log("Sorry, you're not eligible to drive.")
}

//OUTPUT
You can drive`}/>
        </CustomComponent>
    );
};

export default IfElse;
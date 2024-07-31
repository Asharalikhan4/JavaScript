import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const Find: FC = () => {
    return (
        <CustomComponent id="find">
            <Heading level={2} text="find" />
            <p><CustomText>find</CustomText> method returns the value of the first element in the provided array that satisfies the provided testing function.</p>
            <CodeDisplay language="typescript" code={`let ages = [3, 10, 18, 20];`} />
        </CustomComponent>
    );
};

export default Find;
import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const Some: FC = () => {
    return (
        <CustomComponent id="some">
            <Heading level={2} text="some" />
            <p><CustomText>some</CustomText> method tests whether at least one element in the array passes the test implemented by the provided function.</p>
        </CustomComponent>
    );
};

export default Some;
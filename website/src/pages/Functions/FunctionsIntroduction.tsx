import { FC } from "react";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";

const FunctionIntroduction: FC = () => {
    return (
        <CustomComponent id="function-introduction">
            <Heading level={3} text="Function Introduction" />
        </CustomComponent>
    );
};

export default FunctionIntroduction;
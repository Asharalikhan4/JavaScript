import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const Api: FC = () => {
    return (
        <CustomComponent id="api">
            <Heading level={3} text="API (Application Programming Interface)" />
            <p></p>
        </CustomComponent>
    );
};

export default Api;
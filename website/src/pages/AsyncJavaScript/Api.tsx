import { FC } from "react";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";

const Api: FC = () => {
    return (
        <CustomComponent id="api">
            <Heading level={3} text="API (Application Programming Interface)" />
            <p></p>
        </CustomComponent>
    );
};

export default Api;
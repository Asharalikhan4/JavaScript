import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const Ajax: FC = () => {
    return (
        <CustomComponent id="ajax">
            <Heading level={3} text="AJAX (Asynchronous JavaScript and XML(Data Format))" />
            <p>It allows us to communicate with remote web servers in an asynchronous way, with <CustomText>AJAX</CustomText> calls, we can request data from web servers dynamically.</p>
            <p><CustomText>XML</CustomText> was a data format which is used in earlier days now the most popular API data format is JSON.</p>
        </CustomComponent>
    );
};

export default Ajax;
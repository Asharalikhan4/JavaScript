import { FC } from "react";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";

const StrictMode: FC = () => {
    return (
        <CustomComponent id="strict-mode">
            <Heading level={3} text="1.16 - Strict Mode" />
            <p>- It make it easier to write secure javascript.</p>
            <p>- Strict mode changes previously accepted "bad syntax" into real errors.</p>
            <p>- write this into starting</p>
            <CodeDisplay language="javascript" code={`"use strict";`} />
        </CustomComponent>
    );
};

export default StrictMode;
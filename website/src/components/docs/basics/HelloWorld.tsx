import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";

const HelloWorld: FC = () => {
    return (
        <CustomComponent id="hello-world">
            <Heading level={3} text="Hello, World!" />
            <CodeDisplay language="javascript" code={`console.log("Hello, World!");`} />
        </CustomComponent>
    );
};

export default HelloWorld;
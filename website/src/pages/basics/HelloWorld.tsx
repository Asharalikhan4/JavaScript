import { FC } from "react";
import CodeDisplay from "@/components/CodeDisplay";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";

const HelloWorld: FC = () => {
    return (
        <CustomComponent id="hello-world">
            <Heading level={3} text="Hello, World!" />
            <CodeDisplay language="javascript" code={`console.log("Hello, World!");`} />
        </CustomComponent>
    );
};

export default HelloWorld;
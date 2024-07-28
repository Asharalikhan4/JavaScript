import { FC } from "react";
import CodeDisplay from "@/components/CodeDisplay";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";

const Comments: FC = () => {
    return (
        <CustomComponent id="comments">
            <Heading level={3} text="Comments" />
            <CodeDisplay language="javascript" code={`// Single line comment
/* double line
comment */`} />
        </CustomComponent>
    );
};

export default Comments;
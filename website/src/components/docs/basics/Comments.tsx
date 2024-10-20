import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const Comments: FC = () => {
    return (
        <CustomComponent id="comments">
            <Heading level={3} text="1.4 - Comments" />
            <CodeDisplay language="javascript" code={`// Single line comment
/* double line
comment */`} />
        </CustomComponent>
    );
};

export default Comments;
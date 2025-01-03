import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const Comments: FC = () => {
    return (
        <CustomComponent id="comments">
            <Heading level={3} text="1.4 - Comments" />
            <p>- By using a double backslash you can comment a line. <CustomText>{`//`}</CustomText></p>
            <p>- By using a single backslash with star after it you can start a multiple line comment and finish it with start and backslash after it. <CustomText>{`/* your text */`}</CustomText></p>
            <CodeDisplay language="javascript" code={`// Single line comment
/* double line
comment */`} />
        </CustomComponent>
    );
};

export default Comments;
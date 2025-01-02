import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";

const Operators: FC = () => {
    return (
        <CustomComponent id="operators">
            <Heading level={3} text="1.7 - Operators" />
            <p>- Just like other languages js also have the operator's</p>
            <ol className="list-decimal pl-5">
                <li>Arithmethic operator</li>
                <li>Assignment Operator</li>
                <li>Comparison Operator</li>
                <li>Logical Operator</li>
                <li>Conditional Operator</li>
                <li>Type Operator</li>
            </ol>
        </CustomComponent>
    );
};

export default Operators;
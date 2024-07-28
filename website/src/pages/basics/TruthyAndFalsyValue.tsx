import { FC } from "react";
import CustomComponent from "@/components/CustomComponent"
import Heading from "@/components/Heading";

const TruthyAndFalsyValue: FC = () => {
    return (
        <CustomComponent id="truthy-and-falsy-value" >
            <Heading level={3} text="Truthy and Falsy Value" />
            <p>There are 6 falsy value in javascript that will return false.</p>
            <ol className="list-decimal pl-5">
                <li>0</li>
                <li>"" (empty string)</li>
                <li>undefined</li>
                <li>null</li>
                <li>NaN (Not a number)</li>
                <li>false</li>
            </ol>
        </CustomComponent>
    );
};

export default TruthyAndFalsyValue;
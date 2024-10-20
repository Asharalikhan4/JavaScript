import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const ValuesAndVariables: FC = () => {
    return (
        <CustomComponent id="values-and-variables">
            <Heading level={3} text="1.2 - Values and Variables" />
            <p>- Variable name can only contain letter, number, dollar sign and underscore.</p>
            <div>
                <CodeDisplay language="typescript" code={`const greeting = 'Hello, world!';`} />
            </div>
            <div className="font-medium">Here,</div>
            <div>- <CustomText>&quot;Hello, world!&quot;</CustomText> is the <CustomText>value</CustomText> and it&apos;s enclosed inside the quotation mark.</div>
            <div>- <CustomText>greeting</CustomText> is the <CustomText>variable</CustomText> which is holding the value.</div>
        </CustomComponent>
    );
};

export default ValuesAndVariables;
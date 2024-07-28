import { FC } from "react";
import CodeDisplay from "@/components/CodeDisplay";
import Heading from "@/components/Heading";
import CustomComponent from "@/components/CustomComponent";
import CustomText from "@/components/CustomText";

const ValuesAndVariables: FC = () => {
    return (
        <CustomComponent id="values-and-variables">
            <Heading level={3} text="Values and Variables" />
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
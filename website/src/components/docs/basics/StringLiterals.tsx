import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const StringLiterals: FC = () => {
    return (
        <CustomComponent id="string-literals">
            <Heading level={3} text="1.8 - String Literals" />
            <CodeDisplay language="javascript" code={`const firstName = "Ashar;
const birthYear = 1991;
const year = 2024;

const me = "I'm + firstName + , a + (year -  birthyear) + year's old.
console.log(me);

// OUTPUT
I'm Ashar, a 45 year's old.

const me = `
            }/>
        </CustomComponent>
    );
};

export default StringLiterals;
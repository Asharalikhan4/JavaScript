import { FC } from "react";
import dynamic from "next/dynamic";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";

const FunctionsIntroduction = dynamic(() => import("@/components/docs/Functions/FunctionsIntroduction"));
const FunctionDeclaration = dynamic(() => import("@/components/docs/Functions/FunctionDeclaration"));
const ParamtersAndArguementsInFunction = dynamic(() => import("@/components/docs/Functions/ParamtersAndArguementsInFunction"));
const FunctionExpression = dynamic(() => import("@/components/docs/Functions/FunctionExpression"));
const ArrowFunction = dynamic(() => import("@/components/docs/Functions/ArrowFunction"));

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="#2 - Function's" />
            <FunctionsIntroduction />
            <FunctionDeclaration />
            <ParamtersAndArguementsInFunction />
            <FunctionExpression />
            <ArrowFunction />
        </CustomPage>
    );
};

export default Page;
import { FC } from "react";
import dynamic from "next/dynamic";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";
import FunctionDeclaration from "@/components/docs/Functions/FunctionDeclaration";
import FunctionExpression from "@/components/docs/Functions/FunctionExpression";
import ArrowFunction from "@/components/docs/Functions/ArrowFunction";

const FunctionsIntroduction = dynamic(() => import("@/components/docs/Functions/FunctionsIntroduction"));

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="Functions" />
            <FunctionsIntroduction />
            <FunctionDeclaration />
            <FunctionExpression />
            <ArrowFunction />
        </CustomPage>
    );
};

export default Page;
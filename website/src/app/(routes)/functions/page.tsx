import { FC } from "react";
import dynamic from "next/dynamic";
import CustomPage from "@/components/CustomPage";
import Heading from "@/components/Heading";
import FunctionDeclaration from "@/pages/Functions/FunctionDeclaration";
import FunctionExpression from "@/pages/Functions/FunctionExpression";
import ArrowFunction from "@/pages/Functions/ArrowFunction";

const FunctionsIntroduction = dynamic(() => import("@/pages/Functions/FunctionsIntroduction"));

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
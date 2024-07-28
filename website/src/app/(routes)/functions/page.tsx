import { FC } from "react";
import dynamic from "next/dynamic";
import CustomPage from "@/components/CustomPage";
import Heading from "@/components/Heading";

const FunctionsIntroduction = dynamic(() => import("@/pages/Functions/FunctionsIntroduction"));

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="Functions" />
            <FunctionsIntroduction />
        </CustomPage>
    );
};

export default Page;
import { FC } from "react";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={1} text="Compiler" />
            <Heading level={4} text="Comming Soon" />
        </CustomPage>
    );
};

export default Page;
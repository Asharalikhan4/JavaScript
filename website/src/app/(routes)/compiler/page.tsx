import { FC } from "react";
import CustomPage from "@/components/CustomPage";
import Heading from "@/components/Heading";

const page: FC = () => {
    return (
        <CustomPage>
            <Heading level={1} text="Compiler" />
            <Heading level={4} text="Comming Soon" />
        </CustomPage>
    );
};

export default page;
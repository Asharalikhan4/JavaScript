import { FC } from "react";
import CustomPage from "@/components/CustomPage";
import Heading from "@/components/Heading";

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="Array's" />
        </CustomPage>
    );
};

export default Page;
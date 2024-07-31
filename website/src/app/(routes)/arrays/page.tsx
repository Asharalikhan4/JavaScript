import { FC } from "react";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="Array's" />
        </CustomPage>
    );
};

export default Page;
import { FC } from "react";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";

const page: FC = () => {
    return (
        <CustomPage>
            <Heading level={1} text="Contact-Us" />
            <Heading level={4} text="Comming Soon" />
        </CustomPage>
    );
};

export default page;
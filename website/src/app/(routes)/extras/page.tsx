import React, { FC } from "react";
import Heading from "@/components/common/Heading";
import CustomPage from "@/components/common/CustomPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Extra's",
    description: "Extra's",
};

const Page: FC = () => {
    return (
        <CustomPage id="extras">
            <Heading level={3} text="Extra's" />
        </CustomPage>
    );
};

export default Page;
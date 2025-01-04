import React, { FC } from "react";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";
import { DynamicImport } from "@/utils/DynamicImport";

const ObjectsIntroduction = DynamicImport(() => import("@/components/docs/Objects/ObjectsIntroduction"));

const page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="#4 - Object's" />
            <ObjectsIntroduction />
        </CustomPage>
    );
};

export default page;
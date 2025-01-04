import { FC } from "react";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";
import { DynamicImport } from "@/utils/DynamicImport";

const ArrayIntroduction = DynamicImport(() => import("@/components/docs/Arrays/ArrayIntroduction"));
const ArrayMethods = DynamicImport(() => import("@/components/docs/Arrays/ArrayMethods"));

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="#3 - Array's" />
            <ArrayIntroduction />
            <ArrayMethods />
        </CustomPage>
    );
};

export default Page;
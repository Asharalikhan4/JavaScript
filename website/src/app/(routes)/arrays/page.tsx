import { FC } from "react";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";
import { DynamicImport } from "@/utils/DynamicImport";

const ArrayIntroduction = DynamicImport(() => import("@/components/docs/Arrays/ArrayIntroduction"));
const At = DynamicImport(() => import("@/components/docs/Arrays/At"));
const Filter = DynamicImport(() => import("@/components/docs/Arrays/Filter"));
const Find = DynamicImport(() => import("@/components/docs/Arrays/Find"));
const Map = DynamicImport(() => import("@/components/docs/Arrays/Map"));
const Some = DynamicImport(() => import("@/components/docs/Arrays/Some"));

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="# 3 - Array's" />
            <ArrayIntroduction />
            <Heading level={3} text="3.2 - Array Methods" />
            <At />
            <Filter />
            <Find />
            <Map />
            <Some />
        </CustomPage>
    );
};

export default Page;
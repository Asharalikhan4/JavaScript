import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import { DynamicImport } from "@/utils/DynamicImport";
import { FC } from "react";

const At = DynamicImport(() => import("@/components/docs/Arrays/At"));
const Filter = DynamicImport(() => import("@/components/docs/Arrays/Filter"));
const Find = DynamicImport(() => import("@/components/docs/Arrays/Find"));
const Map = DynamicImport(() => import("@/components/docs/Arrays/Map"));
const Some = DynamicImport(() => import("@/components/docs/Arrays/Some"));
const Reduce = DynamicImport(() => import("@/components/docs/Arrays/Reduce"));

const ArrayMethods: FC = () => {
    return (
        <CustomComponent id="array-methods">
            <Heading level={3} text="3.2 - Array Methods" />
            <p>- Array methods are built-in functions provided by JavaScript to perform various operations on arrays. These methods allow you to manipulate, iterate over, and transform arrays efficiently.</p>
            <At />
            <Filter />
            <Find />
            <Map />
            <Some />
            <Reduce />
        </CustomComponent>
    );
};

export default ArrayMethods;
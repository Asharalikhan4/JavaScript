import { FC } from "react";
import ArrayIntroduction from "@/pages/Arrays/ArrayIntroduction";
import Filter from "@/pages/Arrays/Filter";
import Find from "@/pages/Arrays/Find";
import Map from "@/pages/Arrays/Map";
import CustomPage from "@/components/CustomPage";
import Heading from "@/components/Heading";

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="Array's" />
            <ArrayIntroduction />
            <Filter />
            <Find />
            <Map />
        </CustomPage>
    );
};

export default Page;
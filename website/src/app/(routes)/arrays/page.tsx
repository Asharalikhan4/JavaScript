import { FC } from "react";
import ArrayIntroduction from "@/pages/arrays/ArrayIntroduction";
import Filter from "@/pages/arrays/Filter";
import Find from "@/pages/arrays/Find";
import Map from "@/pages/arrays/Map";

const Page: FC = () => {
    return (
        <>
            <ArrayIntroduction />
            <Filter />
            <Find />
            <Map />
        </>
    );
};

export default Page;
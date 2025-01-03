import React, { FC } from "react";
import TableOfContents from "@/components/common/TableOfContents";

const Technologies: Technologies[] = [
    {
        title: "JavaScript",
        link: "/javascript"
    },
    {
        title: "TypeScript",
        link: "/typescript"
    },
    {
        title: "React",
        link: "/react"
    },
    {
        title: "Next",
        link: "/next"
    }
];

const Page: FC = () => {
    return (
        <>
            <TableOfContents text="Technologies" topics={Technologies} />
        </>
    );
};

export default Page;
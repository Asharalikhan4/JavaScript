import { FC } from "react";
import Link from "next/link";
import Heading from "../components/Heading";

interface Chapter {
    name: string;
    url: string;
}

const chapterList: Chapter[] = [
    { name: "Values and Variables", url: "/values-and-variables" },
    { name: "Data Types", url: "/data-types" },
];

const TableOfContent: FC = () => {
    return (
        <div className="space-y-2">
            <Heading name="Table of Content" />
            <ul className="space-y-1">
                {chapterList?.map((chapter, index) => (
                    <li key={index}>
                        <Link href={chapter?.url}>- <span className="hover:underline">{chapter?.name}</span></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TableOfContent;
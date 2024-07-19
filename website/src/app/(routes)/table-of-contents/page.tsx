import TableOfContents from "@/app/pages/TableOfContents";
import { FC } from "react";

interface Topic {
    title: string;
    link: string;
    subtopics?: Topic[];
};

interface TableOfContentsProps {
    topics: Topic[];
};

const topics: Topic[] = [
    {
        title: "Data Types",
        link: "/data-types",
        subtopics: [
            {
                title: "Subtopic 1.1",
                link: "/async-javascript",
                subtopics: [
                    { 
                        title: "Subtopic 1.1.1",
                        link: "/async-javascript",
                        subtopics: [
                            {
                                title: "Subtopic",
                                link: "/async-javascript",
                            }
                        ]
                    },
                    { 
                        title: "Subtopic 1.1.2",
                        link: "/async-javascript",
                    }
                ]
            },
            { 
                title: "Subtopic 1.2",
                link: "/async-javascript",
            }
        ]
    },
    {
        title: "Values and Variables",
        link: "/values-and-variables"
    },
    {
        title: "Async JavaScript",
        link: "/async-javascript",
        subtopics: [
            { 
                title: "Subtopic 2.1",
                link: "/async-javascript",
            },
            { 
                title: "Subtopic 2.2",
                link: "/async-javascript",
            }
        ]
    }
];

const page: FC = () => {
    return (
        <div className="">
            <TableOfContents topics={topics} />
        </div>
    );
};

export default page;
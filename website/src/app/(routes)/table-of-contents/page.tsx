import { FC } from "react";
import TableOfContents from "@/pages/TableOfContents";

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
        title: "Arrays",
        link: "/arrays",
        subtopics: [
            {
                title: "Filter",
                link: "/arrays#filter",
            },
            {
                title: "Find",
                link: "/arrays#find",
            },
            {
                title: "Map",
                link: "/arrays#map",
            }
        ]
    },
    {
        title: "Async JavaScript",
        link: "/async-javascript",
        subtopics: [
            { 
                title: "AJAX",
                link: "/async-javascript#ajax",
            },
            { 
                title: "API",
                link: "/async-javascript#api",
            },
            {
                title: "XMLHttpRequest",
                link: "/async-javascript#xmlhttprequest",
            },
            {
                title: "Promises",
                link: "/async-javascript#promises",
                subtopics: [
                    {
                        title: "Promises and Fetch Api",
                        link: "/async-javascript#promises-and-fetch-api",
                    },
                    {
                        title: "Consuming Promises",
                        link: "/async-javascript#consuming-promises",
                    },
                    {
                        title: "Chaining Promises",
                        link: "/async-javascript#chaining-promises",
                    }
                ]
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
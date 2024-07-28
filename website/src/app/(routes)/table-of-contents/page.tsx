import { FC } from "react";
import TableOfContents from "@/pages/TableOfContents";
import { title } from "process";

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
        title: "Basics",
        link: "/basics",
        subtopics: [
            {
                title: "Hello World",
                link: "/basics#hello-world",
            },
            {
                title: "Values and Variables",
                link: "/basics#values-and-variables",
            },
            {
                title: "Data Types",
                link: "/basics#data-types",
            },
            {
                title: "Comments",
                link: "/basics#comments"
            },
            {
                title: "typeof Operator",
                link: "/basics#typeof-operator"
            },
            {
                title: "Let, Const, Var",
                link: "/basics#let-const-var",
                subtopics: [
                    {
                        title: "Let",
                        link: "/basics#let-const-var",
                    },
                    {
                        title: "Const",
                        link: "/basics#let-const-var",
                    },
                    {
                        title: "Var",
                        link: "/basics#let-const-var",
                    }
                ]
            },
            {
                title: "Operators",
                link: "/operators",
            },
            {
                title: "String Literals",
                link: "/basics#string-literals"
            },
            {
                title: "If Else",
                link: "/basics#if-else",
            },
            {
                title: "Ternary Operator",
                link: "/basics#ternary-operator",
            },
            {
                title: "Type Conversion and Coercion",
                link: "/basics#type-conversion-and-coercion",
                subtopics: [
                    {
                        title: "Type Conversion",
                        link: "/basics#type-conversion-and-coercion"
                    },
                    {
                        title: "Type Coercion",
                        link: "/basics#type-conversion-and-coercion"
                    },
                ]
            },
            {
                title: "Truthy And Falsy Value",
                link: "/basics#truthy-and-falsy-value"
            },
            {
                title: "Equality Operator",
                link: "/basics#equality-operator",
                subtopics: [
                    {
                        title: "Equality Operator (==)",
                        link: "/basics#equality-operator"
                    },
                    {
                        title: "Strict Equality Operator (===)",
                        link: "/basics#equality-operator"
                    },
                ]
            },
            {
                title: "Switch Case",
                link: "/basics#switch-case"
            },
            {
                title: "Statement and Expression",
                link: "/basics#statement-and-expression"
            },
        ]
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
        <div>
            <TableOfContents topics={topics} />
        </div>
    );
};

export default page;
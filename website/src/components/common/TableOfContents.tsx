"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Heading from "./Heading";

interface Topic {
  title: string;
  link: string;
  subtopics?: Topic[];
}

interface TableOfContentsProps {
  text: string;
  topics: Topic[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ text, topics }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isTechnologiesPage = pathname === "/technologies";

  const renderTopic = (
    topic: Topic,
    depth: number = 0,
    index: number,
    parentIndex: string = ""
  ) => {
    const indentClass = depth === 0 ? "" : `ml-${depth * 4}`;
    const textSizeClass = depth === 0 ? "text-lg font-semibold" : "text-base";
    const textColorClass =
      depth === 0
        ? "text-gray-800 dark:text-violet-200"
        : "text-gray-600 dark:text-violet-100";

    const number = depth === 0 ? `${index + 1}` : `${parentIndex}${index + 1}`;

    const handleClick = (e: React.MouseEvent) => {
      if (isTechnologiesPage) {
        e.preventDefault();
        router.push(`/table-of-contents?topic=${encodeURIComponent(topic?.title)}`);
      }
    };

    return (
      <div key={topic?.title} className={`ml-4 my-2`}>
        <Link
          href={isTechnologiesPage ? "#" : topic?.link}
          onClick={isTechnologiesPage ? handleClick : undefined}
          className={`${textSizeClass} ${textColorClass} hover:text-gray-950 dark:hover:text-violet-500 transition-colors duration-200 hover:underline`}
        >
          {depth === 0 ? (
            <>
              # {number}. {topic?.title}
            </>
          ) : (
            <>
              {number} - {topic?.title}
            </>
          )}
        </Link>
        {topic?.subtopics && (
          <div className="mt-1">
            {topic?.subtopics?.map((subtopic, subIndex) =>
              renderTopic(subtopic, depth + 1, subIndex, `${number}.`)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="py-4">
      <Heading level={2} text={text} />
      <div>{topics?.map((topic, index) => renderTopic(topic, 0, index))}</div>
    </div>
  );
};

export default TableOfContents;

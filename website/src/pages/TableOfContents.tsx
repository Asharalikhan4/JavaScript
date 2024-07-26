import React from "react";
import Link from "next/link";
import Heading from "@/components/Heading";

interface Topic {
  title: string;
  link: string;
  subtopics?: Topic[];
}

interface TableOfContentsProps {
  topics: Topic[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ topics }) => {
  const renderTopic = (topic: Topic, depth: number = 0) => {
    const indentClass = depth === 0 ? "" : `ml-${depth * 4}`;
    const textSizeClass = depth === 0 ? "text-lg font-semibold" : "text-base";
    const textColorClass = depth === 0 ? "text-gray-800 dark:text-violet-200" : "text-gray-600 dark:text-violet-100";

    return (
      <div key={topic.title} className={`ml-4 my-2`}>
        {/* <p>{indentClass}</p> */}
        <Link href={topic.link} className={`${textSizeClass} ${textColorClass} hover:text-gray-950 dark:hover:text-violet-500 transition-colors duration-200 hover:underline`}>
          {
            depth === 0 ? (
              <># {topic?.title}</>
            ) : (
              <>- {topic?.title}</>
            )
          }
        </Link>
        {topic?.subtopics && (
          <div className="mt-1">
            {topic?.subtopics?.map((subtopic) => renderTopic(subtopic, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="p-6 rounded-lg">
      <Heading name="Table of Contents" />
      <div>
        {topics?.map((topic) => renderTopic(topic))}
      </div>
    </nav>
  );
};

export default TableOfContents;
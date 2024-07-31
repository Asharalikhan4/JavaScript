import { FC } from "react";

const Heading: FC<HeadingProps> = ({ level, text, className = "" }) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    const baseStyle = "text-gray-900 dark:text-violet-200";

    const headingStyles = {
        1: "text-4xl font-bold",
        2: "text-3xl font-semibold",
        3: "text-2xl font-medium",
        4: "text-xl font-medium",
        5: "text-lg font-normal",
        6: "text-base font-normal",
    };

    return (
        <HeadingTag className={`${baseStyle} ${headingStyles[level]} ${className}`}>
            {text}
        </HeadingTag>
    );
};

export default Heading;

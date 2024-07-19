import { FC } from "react";

interface HeadingProps {
    name: string;
    className?: string;
};

const Heading: FC<HeadingProps> = ({ name, className }) => {
    return (
        <div className={`${className} text-4xl font-semibold`}>{name}</div>
    );
};

export default Heading;
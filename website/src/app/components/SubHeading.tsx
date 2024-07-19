import { FC } from "react";

interface SubHeadingProps {
    name: string;
    className?: string;
};

const SubHeading: FC<SubHeadingProps> = ({ name, className }) => {
    return (
        <div className={`${className} text-xl font-semibold`}>{name}</div>
    );
};

export default SubHeading;
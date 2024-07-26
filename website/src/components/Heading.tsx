import { FC } from "react";

const Heading: FC<HeadingProps> = ({ name, className }) => {
    return (
        <div className={`${className} text-4xl font-semibold`}>{name}</div>
    );
};

export default Heading;
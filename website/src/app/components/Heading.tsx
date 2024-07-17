import { FC } from "react";

interface HeadingProps {
    name: string;
}

const Heading: FC<HeadingProps> = ({ name }) => {
    return (
        <div className="text-4xl font-semibold">{name}</div>
    );
};

export default Heading;
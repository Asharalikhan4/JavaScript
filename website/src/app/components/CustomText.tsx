import { FC } from "react";

interface CustomTextProps {
    text: string;
    className?: string;
}

const CustomText: FC<CustomTextProps> = ({ className, text }) => {
    return (
        <span className={`${className}`}>{text}</span>
    );
};

export default CustomText;
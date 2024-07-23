import { FC } from "react";

const CustomText: FC<CustomTextProps> = ({ className, text }) => {
    return (
        <span className={`${className}`}>{text}</span>
    );
};

export default CustomText;
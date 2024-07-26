import { FC } from "react";

const CustomText: FC<CustomTextProps> = ({ className, text }) => {
    return (
        <span className={`italic text-[#005B41] dark:text-violet-500 font-medium ${className}`}>{text}</span>
    );
};

export default CustomText;
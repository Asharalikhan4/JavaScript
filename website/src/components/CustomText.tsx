import { FC } from "react";

const CustomText: FC<CustomTextProps> = ({ className, children }) => {
    return (
        <span className={`text-[#005B41] dark:text-violet-200 font-medium ${className}`}>{children}</span>
    );
};

export default CustomText;
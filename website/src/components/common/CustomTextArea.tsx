import { FC } from "react";

const CustomTextArea: FC<CustomTextAreaPropsTypes> = ({ name, placeholder, value, rows, cols, className, onChange }) => {
    return (
        <textarea name={name} placeholder={placeholder} value={value} rows={rows} cols={cols} onChange={onChange} className={`${className} dark:bg-black rounded-md outline-none border-2 border-[#005B41] dark:border-violet-500`} />
    );
};

export default CustomTextArea;
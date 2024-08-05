import { FC } from "react";

const CustomInput: FC<CustomInputProps> = ({ name, type, placeholder, value, onChange, className }) => {
    return (
        <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} className={`dark:bg-black rounded-md outline-none border-2 border-[#005B41] dark:border-violet-500 ${className}`} />
    );
};

export default CustomInput;
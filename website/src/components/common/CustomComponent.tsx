import { FC } from "react";

const CustomComponent: FC<CustomComponentProps> = ({ children, className, id }) => {
    return (
        <div id={id} className={`space-y-2 ${className}`}>
            {children}
        </div>
    );
};

export default CustomComponent;
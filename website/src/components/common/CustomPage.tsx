import { FC } from "react";

const CustomPage: FC<CustomPageProps> = ({ className, children, id }) => {
    return (
        <div id={id} className={`px-1 py-2 md:py-4 lg:px-2 space-y-6 ${className}`}>
            {children}
        </div>
    );
};

export default CustomPage;
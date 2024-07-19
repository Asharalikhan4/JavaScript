import SubHeading from "@/app/components/SubHeading";
import { FC } from "react";

const Ajax: FC = () => {
    return (
        <div id="ajax">
            <SubHeading name="AJAX (Asynchronous JavaScript and XML(Data Format))" />
            <p>It allows us to communicate with remote web servers in an asynchronous way, with <span className="italic font-semibold">AJAX</span> calls, we can request data from web servers dynamically.</p>
            <p><span className="italic font-semibold">XML</span> was a data format which is used in earlier days now the most popular API data format is JSON.</p>
        </div>
    );
};

export default Ajax;
import SubHeading from "@/components/SubHeading";
import { FC } from "react";
import Image from "next/image";
import PromisesLifeCycleImage from "../../../public/static/images/PromiseLifeCycleImage.png";

const Promises: FC = () => {
    return (
        <div id="promises">
            <SubHeading name="Promises" />
            <div>
                <p>- An object that is used as a placeholder for the future result of an asynchronous operation.</p>
                <p>- A container for an asynchronously delivered value.</p>
                <p>- A container for a future value.</p>
                <p>ex- Response from a AJAX call.</p>
            </div>
            <Image src={PromisesLifeCycleImage} alt="Promises Life Cycle" width={500} height={300} />
        </div>
    );
};

export default Promises;
import { FC } from "react";
import SubHeading from "@/components/SubHeading";
import Image from "next/image";
import PromisesLifeCycleImage from "../../../public/static/images/PromiseLifeCycleImage.png";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";

const Promises: FC = () => {
    return (
        <CustomComponent id="promises">
            <Heading level={3} text="Promises" />
            <div>
                <p>- An object that is used as a placeholder for the future result of an asynchronous operation.</p>
                <p>- A container for an asynchronously delivered value.</p>
                <p>- A container for a future value.</p>
                <p>ex- Response from a AJAX call.</p>
            </div>
            <Image src={PromisesLifeCycleImage} alt="Promises Life Cycle" width={500} height={300} />
        </CustomComponent>
    );
};

export default Promises;
import SubHeading from "@/components/SubHeading"
import Image from "next/image";
import { FC } from "react"
import Promise1 from "../../../public/static/images/promises1.png";

const PromisesAndFetchApi: FC = () => {
    return (
        <div id="promises-and-fetch-api">
            <SubHeading name="Promises and Fetch Api" />
            <div>
                <p>- It is an ES6 feature.</p>
            </div>
            <Image src={Promise1} alt="Promise" width={500} height={300} />
        </div>
    );
};

export default PromisesAndFetchApi;
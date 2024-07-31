import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import Image from "next/image";
import Promise1 from "../../../../public/static/images/promises1.png";

const PromisesAndFetchApi: FC = () => {
    return (
        <CustomComponent id="promises-and-fetch-api">
            <Heading level={3} text="Promises and Fetch Api" />
            <div>
                <p>- It is an ES6 feature.</p>
            </div>
            <Image src={Promise1} alt="Promise" width={500} height={300} />
        </CustomComponent>
    );
};

export default PromisesAndFetchApi;
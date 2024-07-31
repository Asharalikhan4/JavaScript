import { FC } from "react";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";
import CodeDisplay from "@/components/CodeDisplay";
import CustomText from "@/components/CustomText";

const AsyncAwait: FC = () => {
    return (
        <CustomComponent id="async-await">
            <Heading level={3} text="Comsuming Promises with Async Await" />
            <CodeDisplay language="javascript" code={`cont whereAmI = async function(country){
    const res = await fetch(url);
    const data = await res.json();
    console.log(res);
}`} />
        <p>- <CustomText>Here:</CustomText></p>
        <p>- <CustomText>async</CustomText> keyword tell's function is asynchronous.</p>
        <p>- <CustomText>await</CustomText> will stop the execution till it get's the data, it won't effect the execution cause it's all happening in the background once it get's the data it will move it's execution furthur by executing other lines.</p>
        <p>- We using <CustomText>await</CustomText> before <CustomText>res.json();</CustomText> cause it also return a promise.</p>
        </CustomComponent>
    );
};

export default AsyncAwait;
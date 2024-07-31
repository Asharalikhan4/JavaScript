import { FC } from "react";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";
import CustomText from "@/components/CustomText";
import CodeDisplay from "@/components/CodeDisplay";

const BuildingPromises: FC = () => {
    return (
        <CustomComponent id="building-promises">
            <Heading level={3} text="Building Promises" />
            <div>
                <p>- We use <CustomText>new Promise();</CustomText> to create a new promise.</p>
                <p>- It takes two paramter <CustomText>resolve</CustomText> and <CustomText>reject.</CustomText></p>
                <p> - To make the promise fulfilled we uses <CustomText>resolve()</CustomText>.</p>
            </div>
            <p><CustomText>- Syntax:</CustomText></p>
            <CodeDisplay language="javascript" code={`const promise = new Promise((resolve, reject) => {...});`} />
            <p><CustomText>- Example:</CustomText></p>
            <CodeDisplay language="javascript" code={`// Building a Promise
const lotteryPromise = new Promise(function(reject, resolve){
    console.log("Lottery draw is happening");
    setTimeout(() => {
        if(Math.random() >= 0.5){
            resolve("You Win")
        } else {
            reject(new Error("You Lost"));
        }
    }, 2000);
});


// Consuming a Promise
lotteryPromise
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
})
.finally(() => {
    console.log("I will run always");
});

// Promsifying setTimeout
const wait = function(seconds){
    // timer is never going to be rejected so no need of reject.
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000)
    })
}

wait(1)
.then(() => {
    console.log("1 second passed");
    return wait(1);
})
.then(() => {
    console.log("2 second passed");
    return wait(1);
})
.then(() => {
    console.log("3 second passed");
    return wait(1);
})
.then(() => {
    console.log("4 second passed");
})
.catch((err) => {
    console.error(err);
})
.finally(() => {
    console.log("I will run always");
});
`} />
        </CustomComponent>
    );
};

export default BuildingPromises;
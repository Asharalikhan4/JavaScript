import CodeDisplay from "@/components/CodeDisplay";
import CustomText from "@/components/CustomText";
import SubHeading from "@/components/SubHeading"

const CallbackHell = () => {
    return (
        <div>
            <SubHeading name="Callback Hell" />
            <div>
                <p>- When we try to execute more then one async task in a sequence then <CustomText text="Callback Hell" /> occur.</p>
                <p>- It makes your code hard to maintain and read.</p>
                <p>- It is also known as <CustomText text="Pyramid of Doom" />.</p>
                <p>- To avoid callback hell we can use <CustomText text="Promises" /> or <CustomText text="Async/Await" />.</p>
            </div>
            <CodeDisplay language="typescript" code={`setTimeout(() => {
    console.log("Task 1");
    setTimout(() => {
        console.log("Task 2");
        setTimeout(() => {
            console.log("Task 3");
        }, 1000);
    }, 1000);
}, 1000);`} />
        </div>
    );
};

export default CallbackHell;
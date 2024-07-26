import CodeDisplay from "@/components/CodeDisplay";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";

const AsyncJavaScript = () => {
    return (
        <div className="space-y-2">
            <Heading name="Async JavaScript" />
            <SubHeading name="Synchronous Code" />
            <div>
                <p>- Synchronous code is executed line by line.</p>
                <p>- Each line of code waits for previous line to finish.</p>
            </div>
            <CodeDisplay language="typescript" code={`// Synchronous code
console.log("Hello");
alert("Code blocked");  // Code will stop here until we press ok on the alert box.
console.log("World");`} 
            />
            <SubHeading name="Asynchronous Code" />
            <div>
                <p>- Asynchronous code is non-blocking code.</p>
                <p>- Here setTimeout is will execute after 3 seconds but program will not wait for it. it will in background</p>
            </div>
            <CodeDisplay language="typescript" code={`// Asynchronous code
console.log("Ashar");
setTimeout(() => {
    console.log("Ali");
}, 3000);
console.log("Khan");

// OUTPUT
Ashar
Khan
Ali
`} />
        </div>
    );
};

export default AsyncJavaScript;
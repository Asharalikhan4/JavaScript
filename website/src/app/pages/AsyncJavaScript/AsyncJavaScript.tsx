import CodeDisplay from "@/app/components/CodeDisplay";
import Heading from "@/app/components/Heading";
import SubHeading from "@/app/components/SubHeading";

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
const p = document.querySelector("p");
p.textContent = "My name is Ashar Ali Khan";
alert("This is an alert");  // Code will stop here until we press ok on the alert box.
p.style.color = "red";`} 
            />
            <SubHeading name="Asynchronous Code" />
            <div>
                <p>- Asynchronous code is non-blocking code.</p>
            </div>
            <CodeDisplay language="typescript" code={`// Asynchronous code
const z = document.querySelector("p");
setTimeout(() => {
    p.textContent = "My name is Ashar Ali Khan";    // This code will execute after 5 seconds. here code won't stop.
}, 5000);
z.style.color = "red";`} />
        </div>
    );
};

export default AsyncJavaScript;
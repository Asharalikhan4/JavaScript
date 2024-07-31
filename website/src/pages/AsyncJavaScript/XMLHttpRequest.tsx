import { FC } from "react";
import CodeDisplay from "@/components/CodeDisplay";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";

const XMLHttpRequest: FC = () => {
    return (
        <CustomComponent id="xmlhttprequest">
            <Heading level={3} text="XMLHttpRequest" />
            <CodeDisplay language="typescript" code={`// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /api/data
xhr.open("GET", "https://api.example.com/data", true);

// Set the request headers if needed
xhr.setRequestHeader("Content-Type", "application/json");

// Add an event listener for when the request is completed
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            // Successfully got the response
            console.log("Response:", xhr.responseText);
        } else {
            // There was a problem with the request
            console.error("Error:", xhr.status, xhr.statusText);
        }
    }
};

// Send the request
xhr.send();`} />
        </CustomComponent>
    );
};

export default XMLHttpRequest;
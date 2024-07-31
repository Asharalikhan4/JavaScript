import { FC } from "react";
import CustomComponent from "@/components/CustomComponent";
import Heading from "@/components/Heading";
import CodeDisplay from "@/components/CodeDisplay";
import CustomText from "@/components/CustomText";

const ErrorHandlingWithTryCatchFinally: FC = () => {
    return (
        <CustomComponent id="error-handling-with-try-catch-finally">
            <Heading level={3} text="Error Handling with try, catch and finally" />
            <div>
                <p>- In async/await we can't use .catch() method like we used to, so we use try, catch and finally block.</p>
            </div>
            <p><CustomText>- Syntax:</CustomText></p>
            <CodeDisplay language="javascript" code={`try {
// Code
} catch (err){
console.error(err)
// Code
} finally {
// Code
}`} />
        </CustomComponent>
    );
};

export default ErrorHandlingWithTryCatchFinally;
import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const TypeConversionAndCoercion = () => {
    return (
        <div className="space-y-2">
            <Heading level={3} text="Type Conversion and Coercion" />
            <Heading level={4} text="Type Conversion" />
            <p>- Type conversion is the explicit (where we declare for the conversion) or intentional conversion of one data type to another using JavaScript functions or methods. It is done when you want to change the data type of a value deliberately.</p>
            <p>- Type conversion results in creating a new value with a different data type while leaving the original value unchanged.</p>
            <p>- For example, you can use functions like parseInt(), parseFloat(), and String() to explicitly convert values from one type to another.</p>
            <CodeDisplay language="javascript" code={`let num = "42";
console.log(typeof(num));

let integerNum = parseInt(num);
console.log(typeof(integerNum));

let floatNum = parseFloat(num);
console.log(typeof(floatNum));

let booleanNum = Boolean(num);
console.log(typeof(booleanNum));`} />
            <Heading level={4} text="Type Coercion" />
            <p>- Type coercion is the implicit (here compiler did the conversion itself) or automatic conversion of values between data types when operators or functions expect a particular type. JavaScript automatically converts values to match the expected data type in an operation.</p>
            <p>- Type coercion is sometimes referred to as "type casting" or "type juggling". It can lead to unexpected results in some cases, as JavaScript attempts to make the operation work by converting one or both operands.</p>
            <p>- Type coercion is a common source of confusion and potential bugs in JavaScript, as it may not always behave as expected. It's important to be aware of how type coercion works and to handle type conversions explicitly when needed to ensure that your code behaves as intended.</p>
            <CodeDisplay language="javascript" code={`let x = 5;
let y = "5";
let answer = x + y;
console.log(answer);
console.log(typeof(answer));`} />
        </div>
    );
};

export default TypeConversionAndCoercion;
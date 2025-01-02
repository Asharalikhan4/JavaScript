import { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";

const ParamterInFunction: FC = () => {
    return (
        <CustomComponent id="paramter-in-function">
            <Heading level={3} text="2.3 - Parameter's In Function" />
            <p>- Parameters are placeholders used in the function definition to represent the values that will be passed to the function when it is called.</p>
            <CodeDisplay language="javascript" code={`function greet(name) { // 'name' is a parameter
  console.log("Hello, {name}!");
}

greet("Ashar"); // "Ashar" is an argument`} />
        <p>- You can assign default values to parameters. If no argument is passed, the parameter will take the default value.</p>
        <CodeDisplay language="javascript" code={`function greet(name = "Guest") {
  console.log("Hello, {name}!");
}

greet("Ashar"); // Output: Hello, Ashar!
greet();        // Output: Hello, Guest!`} />
        </CustomComponent>
    );
};

export default ParamterInFunction;
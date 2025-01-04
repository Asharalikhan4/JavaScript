import React, { FC } from "react";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";
import CustomComponent from "@/components/common/CustomComponent";

const page: FC = () => {
    return (
        <CustomPage id="closure">
            <CustomComponent id="closure">
            <Heading level={2} text="#5 - Closure" />
            <p>- <CustomText>Closures</CustomText> is a bundling of two or more functions where inner functions have access to the properties and methods of the outer functions even after the execution of the external function is done.</p>
            <CodeDisplay language="javascript" code={`function example() {
    let car = "mustang";
    function displayCar() {
        console.log(car);
    }
    displayCar();
};

example();

//OUTPUT -> mustang`} />
            <p>- If you notice the variable blog is declared above the function displayCar(), but it can be accessed inside it.</p>
            <p>- This is because variables are lexical scope in javascript and then can be accessed anywhere inside the scope unless and until they are overridden. In the above example, the variable is function scoped and it can be accessed anywhere within the function body (even in the inner functions ).</p>
            <CodeDisplay language="javascript" code={`function example() {
    // outer scoped
    let car = "mustang";
    function displayCar() {
        let car = "bmw";
        console.log(car);
    };
    displayCar();
};

example();

// OUTPUT -> bmw`} />
            <p>- Preference is always given to the nearest declared one. This features makes the closures powerful as even if we return the inner function, it will have access to the variables ( it will be alive ) in the outer scope and perform all the sorts of operations.</p>
            <p>- Not only variables but can also access all the other properties and methods of the outer function, not just parent but at any level in the scope it is declared.</p>
            </CustomComponent>
        </CustomPage>
    );
};

export default page;
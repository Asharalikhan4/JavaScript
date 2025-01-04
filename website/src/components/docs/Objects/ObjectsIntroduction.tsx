import React, { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const ObjectsIntroduction: FC = () => {
    return (
        <CustomComponent id="object-introduction">
            <Heading level={3} text="4.1 - Object Introduction" />
            <p>- An object in JavaScript is a complex data type that allows you to store collections of data and more complex entities. Objects are used to represent real-world entities and can contain properties and methods.</p>
            <p>- <CustomText>Properties:</CustomText> Key-value pairs that store data.</p>
            <p>- <CustomText>Methods:</CustomText> Functions that are defined as properties of an object.</p>
            <CodeDisplay language="typescript" code={`const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
  greet: function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  }
};

// Accessing properties
console.log(person.firstName); // Output: John
console.log(person.age); // Output: 30

// Calling a method
person.greet(); // Output: Hello, my name is John Doe`} />
            <Heading level={5} text="Accessing and Modifying Properties:" />
            <p>- Accessing element using Dot operator. <CustomText>(.)</CustomText></p>
            <CodeDisplay language="javascript" code={`console.log(person.firstName);`} />
            <p>- Accessing element using square bracket. <CustomText>([])</CustomText></p>
            <CodeDisplay language="javascript" code={`console.log(person["firstName"]);`} />
            <p>- Adding a property.</p>
            <CodeDisplay language="javascript" code={`// Adding a new property
person.country = "USA";
console.log(person.country); // Output: USA`} />
            <p>- Deleting a property.</p>
            <CodeDisplay language="javascript" code={`// Deleting a property
delete person.isEmployed;
console.log(person.isEmployed); // Output: undefined`} />
        </CustomComponent>
    );
};

export default ObjectsIntroduction;
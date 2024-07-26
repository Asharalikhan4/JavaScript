import CodeDisplay from "@/components/CodeDisplay";
import CustomText from "@/components/CustomText";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import { FC } from "react";

const ArrayIntroduction: FC = () => {
    return (
        <div className="space-y-3">
            <Heading name="Arrays" />
            <div className="space-y-2">
                <p>Objects allow you to store keyed collections of values. That’s fine.</p>
                <p>But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.</p>
                <p>It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.</p>
                <p>There exists a special data structure named <CustomText text="Array" />, to store ordered collections.</p>
            </div>
            <SubHeading name="Declaration" />
            <div className="space-y-2">
                <p>There are two syntaxes for creating an empty array:</p>
                <CodeDisplay language="typescript" code={`let arr = new Array();
let arr = [];`} />
                <p>We can get an element by its number in square brackets:</p>
                <CodeDisplay language="typescript" code={`let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum`} />
                <p>We can replace an element:</p>
                <CodeDisplay language="typescript" code={`fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]`} />
                <p>…Or add a new one to the array:</p>
                <CodeDisplay language="typescript" code={`fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]`} />
                <p>We can also use alert to show the whole array.</p>
                <CodeDisplay language="typescript" code={`let fruits = ["Apple", "Orange", "Plum"];
alert( fruits ); // Apple,Orange,Plum`} />
                <p>An array can store elements of any type. For instance:</p>
                <CodeDisplay language="typescript" code={`// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// get the object at index 1 and then show its name
alert( arr[1].name ); // John
// get the function at index 3 and run it
arr[3](); // hello`} />
            </div>
        </div>
    );
};

export default ArrayIntroduction;
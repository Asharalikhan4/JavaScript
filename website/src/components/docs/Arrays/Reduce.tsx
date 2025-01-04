import React, { FC } from "react";
import CustomComponent from "@/components/common/CustomComponent";
import Heading from "@/components/common/Heading";
import CodeDisplay from "@/components/common/CodeDisplay";
import CustomText from "@/components/common/CustomText";

const Reduce: FC = () => {
    return (
        <CustomComponent id="reduce">
            <Heading level={4} text="3.2.6 - reduce" />
            <CodeDisplay language="javascript" code={`// SYNTAX
array.reduce(callback(accumulator, currentValue, currentIndex, array) => {}, initialValue;)`} />
            <p>- <CustomText>callback:</CustomText> A function to execute on each element in the array. It takes four arguments</p>
            <p>- <CustomText>accumulator:</CustomText> The accumulated value previously returned in the last invocation of the callback, or the initialValue if supplied.</p>
            <p>- <CustomText>currentValue:</CustomText> The current element being processed in the array.</p>
            <p>- <CustomText>currentIndex:</CustomText> The index of the current element being processed in the array.</p>
            <p>- <CustomText>array:</CustomText> The array reduce was called upon.</p>
            <p>- <CustomText>initialValue:</CustomText> Optional. A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used as the initial accumulator value, and reduce will start from the second element.</p>
            <CodeDisplay language="javascript" code={`const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15`} />
        </CustomComponent>
    );
};

export default Reduce;
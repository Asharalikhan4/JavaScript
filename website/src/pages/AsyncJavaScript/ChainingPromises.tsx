import { FC } from "react";
import Heading from "@/components/Heading";
import CustomComponent from "@/components/CustomComponent";
import CodeDisplay from "@/components/CodeDisplay";
import CustomText from "@/components/CustomText";

const ChainingPromises: FC = () => {
    return (
        <CustomComponent id="chaining-promises">
            <Heading level={3} text="Chaining Promises" />
            <CodeDisplay language="javascript" code={`const getCountryData = function(country) {
    fetch("https://restcountries.com/v3.1/name/{country}")
    .then((response) => response.json())
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0]?.borders[0];
        if(!neighbour) return;
        // Country 2
        return fetch("https://restcountries.com/v3.1/alpha/{neighbour}");
    })
    .then(response => response.json())
    .then(data => renderCountry(data, "neighbour"))
}

getCountryData("germany");`} />
            <p>- Don't use nested <CustomText>.then()</CustomText> method, that will same as the callback hell.</p>
        </CustomComponent>
    );
};

export default ChainingPromises;
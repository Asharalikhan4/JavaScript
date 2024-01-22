"use strict";

const getJSON = function(url, errorMsg = "Something went wrong") {
    return fetch(url)
    .then(response => {
        if(!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
}

const get3Countries = async function(c1, c2, c3) {
    try{
        // this api return the data in the form of array so we're using array destructuring here.
    //    const [ data1 ] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`, "Country not found");     
    //    const [ data2 ] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`, "Country not found");
    //    const [ data3 ] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`, "Country not found");
    // console.log([data1?.capital[0], data2?.capital[0], data3?.capital[0]]);

    // if one of the promise reject then all the promise will be rejected.
       const data = await Promise.all([ getJSON(`https://restcountries.com/v3.1/name/${c1}`), getJSON(`https://restcountries.com/v3.1/name/${c2}`), getJSON(`https://restcountries.com/v3.1/name/${c3}`)]);
       console.log(data.map(d => d[0]?.capital[0]))
       
    } catch (error) {
        console.error(error);
    }
}

get3Countries("portugal", "canada", "tanzania");
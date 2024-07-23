const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    // To get the json out of the data
    const data = await res.json();
    console.log(data);
}

whereAmI("portugal");

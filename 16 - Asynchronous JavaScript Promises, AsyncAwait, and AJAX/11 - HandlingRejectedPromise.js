"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = funciton(msg) {
    countriesContainer.insertAdjacentText("beforehand", msg);
    countriesContainer.style.opacity = 1;
}

const renderCountry = function(data, className = "") {
    const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data?.flags?.png}" />
          <div class="country__data">
            <h3 class="country__name">${data?.name?.common}</h3>
            <h4 class="country__region">${data?.region}</h4>
            <p class="country__row"><span>👫</span>${(+data?.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data?.languages?.por}</p>
            <p class="country__row"><span>💰</span>${data?.currencies?.EUR?.name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
};

const getCountryData = function(country) {
    //  Country 1
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    // .then((response) => response.json(),
    //  err => alert(err)
    //  )
    // .then(data => {
    //     renderCountry(data[0]);
    //     const neighbour = data[0]?.borders[0];
    //     if(!neighbour) return;
    //     // Country 2
    //     return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    // })
    // .then(response => response.json(),
    //  err => alert(err)
    //  )
    // .then(data => renderCountry(data, "neighbour"))


    // we can use the err to handle the error or we cn also use the catch to handle the error as like we did in code below.
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0]?.borders[0];
        if(!neighbour) return;
        // Country 2
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, "neighbour"))
    .catch(err => {
        console.error(err);
        renderError(`Something went wrong ${err.message}. Try again!`)
    })
    .finally(() => {
        // this callback funciton is going to be called everytime.
        // stop showing spinner.
        
    })
}

btn.addEventListener("click", function() {
    getCountryData("portugal");
});

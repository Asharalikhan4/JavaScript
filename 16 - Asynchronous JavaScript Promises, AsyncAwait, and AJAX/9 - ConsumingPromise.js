"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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

// const getCountryData = function(country) {
//     // this is how we handle the fulfilled promise.
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//     });
// };

// we can also write the above function in 
const getCountryData = function(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]))
}

getCountryData("portugal");

// Promises don't get rid of callback but it help us to get rid of call back hell.
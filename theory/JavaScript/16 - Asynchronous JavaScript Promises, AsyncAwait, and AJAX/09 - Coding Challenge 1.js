"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function(msg) {
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

function whereAmI(lat, lng) {
    fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=65ae1a71436bd741169482uzfe13690`)
    .then((response) => {
        if (!response.ok) throw new Error(`Problem with geocoding ${response.status}`);
        return response.json();
    })
    .then((data) => {
        console.log(`You're in ${data?.address?.city}, ${data?.address?.country}`)
        return fetch(`https://restcountries.com/v3.1/name/${data?.address?.country}`)
    })
    .then((response) => {
        if (!response.ok) throw new Error(`Country not found ${response.status}`);
        return response.json();
    })
    .then((data) => {
        renderCountry(data[0]);
    })
    .catch((error) => {
        console.error(error);
    });
}
 
btn.addEventListener("click", function() {
    // whereAmI(19.037, 72.873);   //india
    whereAmI(52.508, 13.381);   //germany
});

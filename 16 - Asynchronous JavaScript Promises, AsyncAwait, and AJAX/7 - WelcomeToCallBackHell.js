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


const getCountryAndNeighbour = function (country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener("load", function () {
        const [ data ] = JSON.parse(this.responseText);
        console.log(data);

        // Render Country
        renderCountry(data);

        // Get neighbour country
        const neighbour = data?.borders?.[0];

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener("load", function() {
            const [ data2 ] = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, "neighbour");
        });
    });
};

getCountryAndNeighbour("usa");


//  Here one AJAX call are dependent on the other AJAX call to execute.
//  We have nested callback function here.
//  if we have many callback function then soon it will become call back hell.
//  here we are executing Async task in sync.


// Below down is an example of call back hell.
setTimeout(() => {
    console.log("1 second passed");
    setTimeout(() => {
        console.log("2 second passed");
        setTimeout(() => {
            console.log("3 second passed");
            setTimeout(() => {
                console.log("4 second passed");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
// For the html use the index.html file and link the js file you want to use and comment out the other js files.

"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryData = function (country) {
  // Old school way of fetching data from API's, In this we are simply fetching the data of some countries and showing it on the frontend.
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  // We can get the data directly by assigning request.send() to some variable we use event listener on load that will execute on load and return a call back from where we get the data.
  request.addEventListener("load", function () {
    // data from the api is in the JSON format so we use fuction below to convert it into the object format.
    // const data = JSON.parse(this.responseText);  -> we can also use this line but we need to structure the data so we use line below
    const [data] = JSON.parse(this.responseText);
    console.log(data.currencies);
    const html = `
        <article class="country">
          <img class="country__img" src="${data?.flags?.png}" />
          <div class="country__data">
            <h3 class="country__name">${data?.name?.common}</h3>
            <h4 class="country__region">${data?.region}</h4>
            <p class="country__row"><span>👫</span>${(+data?.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data?.languages?.por}</p>
            <p class="country__row"><span>💰</span>${data?.currencies?.EUR?.name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("portugal");
getCountryData("usa");
getCountryData("germany");

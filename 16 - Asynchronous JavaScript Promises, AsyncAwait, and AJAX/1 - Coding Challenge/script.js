"use strict";

const whereAmI = function(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
};

console.log(whereAmI(52.508, 13.381));
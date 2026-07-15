/*
Implement a debounce function that will invoke the function once in the specified duration.
*/

function debounce(fn, delay) {
    let inDebounce;
    return function () {
        if (inDebounce) {
            clearTimeout(inDebounce);
        };
        inDebounce = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};
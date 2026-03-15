const myPromiseAny = function (promisesArray) {
    const promiseErrors = new Array(promisesArray?.length);
    let counter = 0;
    return new Promise((resolve, reject) => {
        promisesArray?.forEach((promise) => {
            Promise.resolve(promise);
        })
    })
}
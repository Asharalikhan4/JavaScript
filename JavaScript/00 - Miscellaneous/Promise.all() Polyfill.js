const myPromiseAll = function(taskList) {
    let results = [];
    let promisesCompleted = 0;
    return new Promise((resolve, reject) => {
        taskList?.forEach((promise, index) => {
            promise.then((val) => {
                results[index] = val;
                promisesCompleted += 1;
            });
            if (promisesCompleted === taskList?.length) {
                resolve(results)
            }
        }).catch((error) => {
            reject(error)
        });
    })
};
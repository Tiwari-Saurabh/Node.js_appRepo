/*jshint esversion: 6 */
var asyncadd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Input must be number');
            }
        }, 1500);
    });

};

asyncadd(6, 7).then((res) => {
    console.log('Result', res);
}, (errorMessage) => {
    console.log(errorMessage);
});
// var somePromises = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey,It worked');
//         reject('Hey,promise cant be fullfiled');
//     }, 2500);
// });

// somePromises.then((message) => {
//     console.log('success', message);
// }, (errorMessage) => {
//     console.log('Failed', errorMessage);
// });
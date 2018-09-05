/*jshint esversion: 6 */
console.log("Starting the app");
setTimeout(() => {
    console.log("Inside the call back");
}, 2000);
setTimeout(() => {
    console.log("Second time out");
}, 0);
console.log("End of the program");
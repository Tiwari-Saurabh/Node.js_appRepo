/*jshint esversion: 6 */
console.log("Something for later");
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json.then((data) => {
//         console.log(data);
//     });
// });



const weatherForm = document.querySelector('form');

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const location = search.value;

    fetch('http://localhost:3000/weather?address=').then((response) => {
        response.json.then((data) => {
            if (data.error) {
                console.log(data.error, "Unable to fetch the data");
            } else {
                console.log(data.forecast);
                console.lof(data.location);
            }
        });

    });
});
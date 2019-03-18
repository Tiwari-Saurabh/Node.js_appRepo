/*jshint esversion: 6 */
console.log("Something for later");
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json.then((data) => {
//         console.log(data);
//     });
// });



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageone = document.querySelector('#message-1');
const messagesecond = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const location = search.value;

    messageone.textContent = 'Loading....';
    messagesecond.textContent = 'hi';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json.then((data) => {
            if (data.error) {
                messageone.textContent = data.error;
                // console.log(data.error, "Unable to fetch the data");
            } else {
                messageone.textContent = data.location;
                messagesecond.textContent = data.forecast;
                // console.log(data.forecast);
                // console.lof(data.location);
            }
        });

    });
});